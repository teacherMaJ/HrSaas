<template>
  <div class="dashboard-container">
    <div class="app-container">
       <el-card>
           <el-tabs>
              <el-tab-pane label="角色管理">
                 <el-row style="height:60px">
                    <el-button type="primary" icon="el-icon-plus" size="small">新增角色</el-button>
                 </el-row>
                 <el-table border :data="list">
                   <el-table-column
                     type="index"
                     label="序号"
                     width="120">
                   </el-table-column>
                   <el-table-column
                     prop="description"
                     label="描述"
                     width="240">
                   </el-table-column>
                   <el-table-column
                     prop="name"
                     label="名称"
                   >
                   </el-table-column>
                   <el-table-column
                     prop="prop"
                     label="操作"
                   >
                   <template slot-scope="{row}">
                      <el-button type="success" size="small">分配权限</el-button>
                      <el-button type=" primary" size="small">编辑</el-button>
                      <el-button type="danger" size="small">删除</el-button>
                      
                   </template>
                   </el-table-column>
                 </el-table>
                <!-- 分页组件 -->
                <el-row type="flex" justify="center" style="height:60px" align="middle">
                  <el-pagination
                    layout="prev, pager, next"
                    :total="total"
                    :current-page="page"
                    :page-size="pagesize"
                     @current-change="handleCurrentChange"
                  >
                  </el-pagination>
                </el-row>
              </el-tab-pane>
              <!-- 右侧切换 -->
              <el-tab-pane label="公司信息">
                <el-form label-width="120px" style="margin-top:50px">
                   <el-form-item label="企业名称">
                       <el-input style="width:400px" disabled></el-input>
                   </el-form-item>
                   <el-form-item label="公司地址">
                       <el-input style="width:400px" disabled></el-input>
                   </el-form-item>
                   <el-form-item label="电话">
                       <el-input style="width:400px" disabled></el-input>
                   </el-form-item>
                   <el-form-item label="邮箱">
                       <el-input style="width:400px" disabled></el-input>
                   </el-form-item>
                   <el-form-item label="备注">
                       <el-input style="width:400px" disabled type="textarea" :rows="3"></el-input>
                   </el-form-item>
                </el-form>

              </el-tab-pane>

           </el-tabs>  
       </el-card>
    </div>
  </div>
</template>

<script>
import {getRoleList,getCompanyInfoById} from "@/api/modules/setting"
export default {
   name:"setting",
   data(){
       return {
           page:1,
           pagesize:2,
           total:0,
           list:[]
       }
   },
   computed:{
       //获取用户id
       id(){
           return this.$store.state.user.userInfo.userId
       }
   },
   mounted(){
       //获取列表数据
       
       this.getList()
       //获取公司信息
    //    this.getCompanyInfo(this.id)
   },
   methods:{
      //获取员工列表数据
       async getList(){
          const {page,pagesize}  = this
          const res = await getRoleList({page,pagesize})
          this.total = res.total
          this.list = res.rows
        },
      //分页发生改变时
      handleCurrentChange(page){
          this.page = page
          this.getList()
      },
      //获取公司信息
     async getCompanyInfo(id){
         console.log(id);
        const res = await getCompanyInfoById(id)
        console.log(res)
      }
   }
}
</script>

<style>

</style>