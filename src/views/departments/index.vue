<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
         <!-- 头部 -->
         <el-row type="flex" justify="space-between" style="height:40px" align="bottom">
           <el-col>
              <span>组织架构</span>
           </el-col>
           <el-col :span="6">
               <el-row type="flex" justify="end">
                  <el-col>负责人</el-col>
                  <el-col>
                    <el-dropdown>
                        <span>操作<i class="el-icon-arrow-down el-icon--right"></i></span>
                         <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>添加子部门</el-dropdown-item>
                            <!-- <el-dropdown-item>编辑部门</el-dropdown-item>
                            <el-dropdown-item>删除部门</el-dropdown-item>  -->
                         </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
               </el-row>
           </el-col>
         </el-row>
         <!-- 树形结构 -->
         <el-tree
           :data="departs"
           :props="defaultProps"
         >
             <template slot-scope="{data}">
                    <el-row type="flex" justify="space-between" style="height:40px;width:100%" align="middle">
                      <el-col>
                          <span>{{data.name}}</span>
                      </el-col>
                      <el-col :span="6">
                          <el-row type="flex" justify="end">
                              <el-col>负责人</el-col>
                              <el-col>
                                <el-dropdown>
                                    <span>操作<i class="el-icon-arrow-down el-icon--right"></i></span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>添加子部门</el-dropdown-item>
                                        <el-dropdown-item>编辑部门</el-dropdown-item>
                                        <el-dropdown-item>删除部门</el-dropdown-item> 
                                    </el-dropdown-menu>
                                </el-dropdown>
                              </el-col>
                          </el-row>
                      </el-col>
                    </el-row>
             </template>
         </el-tree>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name:"departments",
   data() {
    return {
      defaultProps: {
        label: 'name'
      },
      departs: [{ name: '总裁办', children: [{ name: '董事会' }] },
        { name: '行政部' }, { name: '人事部' }]
    }
  }
}
</script>

<style scoped>
  .tree-card {
    padding: 30px  140px;
    font-size:14px;
  }
</style>