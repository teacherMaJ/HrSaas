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
<!--      数据展示-->
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods:{
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
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>

<style>

</style>
