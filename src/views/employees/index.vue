<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- <el-button type="primary" @click="$router.push('/import')">批量导入员工</el-button> -->
      <commonTools>
         <template slot="left">
             <el-alert
                title="一个提示框"
                type="success"
                :closable="false"
                style="width:80%"
             >
             </el-alert>
         </template>
         <template slot="right">
              <el-button type="text" @click="$router.push('/import')">批量添加</el-button>
              <el-button type="text" @click="handlExport">导出</el-button>
         </template>
      </commonTools>

      <el-card>
          <el-table
              border
              :data="userList"
          >
            <el-table-column
              label="序号"
              type="index"
            >

            </el-table-column>

            <el-table-column
              label="姓名"
              prop="username"
            >

            </el-table-column>

            <el-table-column
              label="头像"
            >
               <template slot-scope="{row}">
                 <img
                   v-imagerror="require('@/assets/common/head.jpg')"
                   :src="row.staffPhoto"
                   alt=""
                   style="width: 100px;height: 100px;border-radius: 50%;"
                 >
               </template>
            </el-table-column>

            <el-table-column
              label="工号"
              prop="workNumber"
            >

            </el-table-column>

            <el-table-column
              label="聘用形式"
              prop="formOfEmployment"
              :formatter="formatEmployment"
            >

            </el-table-column>

            <el-table-column
              label="部门"
              prop="departmentName"
            >

            </el-table-column>

            <el-table-column
              label="入职日期"
              prop="timeOfEntry"
            >
                <template slot-scope="{row}">
                   {{row.timeOfEntry | formatDate}}
                </template>
            </el-table-column>

            <el-table-column
              label="账户状态"
              prop="enableState"
              align="center"
            >
                 <template slot-scope="{row}">
                   <el-switch
                     :value="row.enableState === 1"
                   >
                   </el-switch>
                 </template>
            </el-table-column>

            <el-table-column
              label="操作"
              width="300px"
            >
                 <template slot-scope="{row}">
                   <el-button type="text" size="mini">查看</el-button>
                   <el-button type="text" size="mini">转正</el-button>
                   <el-button type="text" size="mini">调岗</el-button>
                   <el-button type="text" size="mini">离职</el-button>
                   <el-button type="text" size="mini">角色</el-button>
                   <el-button type="text" size="mini">删除</el-button>
                 </template>
            </el-table-column>
          </el-table>

        <el-row type="flex" justify="center">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            @current-change="handlePage"
          >
          </el-pagination>
        </el-row>
      </el-card>

    </div>
  </div>
</template>

<script>
import {getAll} from "@/api/modules/employees"
import {formatDate} from "@/filters"
//引入枚举对象
import EmployeeEnum from "@/api/constant/employees"
export default {
  data(){
    return{
      //总页数
      total:0,
      page:1,
      size:10,
      userList:[]
    }
  },
  mounted() {
    this.getUserList()
  },
  methods:{
    //数据导出
    handlExport(){
      import("@/vendor/Export2Excel").then(excel=>{
        //导出数据的表头
        const tHeader = ['日期', '姓名', '地址']
        //需要导出哪些数据
        const filterVal = ['date', 'name', 'address']
        //得到整体的数据
        const list = this.tableData
        //用整体的数据过滤出需要的数据
        const data = this.formatJson(filterVal, list)
        //进行数据的导出操作
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: '数据导出',
          autoWidth: this.autoWidth,
          bookType: 'xlsx'
        })

      })
    },
    //筛选导出的数据
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    //获取所有员工
   async getUserList(){
     const res = await getAll({page:this.page,size:this.size})
     this.userList = res.rows
     this.total = res.total
    },
    //  分页数据发生改变
    handlePage(page){
      this.page = page
      this.getUserList()
    },
    //用于表格格式话数据
    formatEmployment(row, column, cellValue, index){
    const obj =  EmployeeEnum.hireType.find(item =>item.id === cellValue)
      return obj ? obj.value : '未知'
    }
  }
}
</script>

<style>

</style>
