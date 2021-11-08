<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- <el-button type="primary" @click="$router.push('/import')">批量导入员工</el-button> -->
      <commonTools>
         <template slot="left">
             <el-alert
                title="一个提升框"
                type="success"
                :closable="false"
                style="width:80%"
             >
             </el-alert>  
         </template>
         <template slot="right">
              <el-button type="text" @click="$router.push('/import')">批量添加</el-button>
              <el-button type="text">导出</el-button>
         </template>
      </commonTools>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>