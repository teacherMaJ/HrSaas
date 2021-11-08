<template>
  <div>
     <el-card>
          <el-row type="flex" justify="space-between" style="height:60px" align="middle">
                <el-col :span="8">
                   <slot name="left" />
                </el-col>
                <el-col :span="8">
                    <el-row type="flex" justify="end">
                      <slot name="right" />      
                    </el-row>
                </el-col>
         </el-row>
     </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      name:'commonTools'
  }
</script>

<style scoped>

 
</style>
