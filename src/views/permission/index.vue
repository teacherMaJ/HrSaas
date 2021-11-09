<template>
  <div class="dashboard-container">
    <div class="app-container">
<!--      头部-->
      <el-card>
         <el-row type="flex" justify="end">
            <el-button type="primary" size="mini">添加权限</el-button>
         </el-row>
      </el-card>
<!--      权限数据展示-->
      <el-card>
         <el-table
             :data="permissionList"
              border
              row-key="id"
             :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
         >
             <el-table-column
                  label="名称"
                  prop="name"
             >
             </el-table-column>

             <el-table-column
                  label="标识"
                  prop="code"
             >
             </el-table-column>

             <el-table-column
                  label="描述"
                  prop="description"
             >
             </el-table-column>

             <el-table-column
                  label="操作"
                  align="center"
             >
                  <template slot-scope="{row,$index}">
                       <el-button type="text" size="mini" v-if="row.type === 1">添加</el-button>
                       <el-button type="text" size="mini">编辑</el-button>
                       <el-button type="text" size="mini">删除</el-button>
                  </template>
             </el-table-column>
         </el-table>
      </el-card>
<!--      添加权限信息框-->
      <addPermission></addPermission>
    </div>
  </div>
</template>

<script>
import {getAll_Permission} from "@/api/modules/permission"
import {tranListToTreeData} from "@/utils/tranListToTreeDate"
//添加权限组件
import addPermission from '@/views/permission/components/addPermission'
export default {
    data(){
      return {
        permissionList:[]
      }
    },
  components:{
    addPermission
  },
  mounted() {
      this.getPermissions()
  },
  methods:{
      //获取所有的权限点
    async getPermissions(){
      const res = await getAll_Permission()
      this.permissionList = tranListToTreeData(res,'0')

    }
  }
}
</script>

<style>

</style>
