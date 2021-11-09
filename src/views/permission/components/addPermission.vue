<template>
  <el-dialog title="添加权限" :visible.sync="dialogFormVisible">
    <el-form :model="addPermissionInfo" :rules="rules">
      <el-form-item label="名称" :label-width="formLabelWidth" prop="name">
        <el-input v-model="addPermissionInfo.name" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="标识" :label-width="formLabelWidth" prop="code">
        <el-input v-model="addPermissionInfo.code" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="描述" :label-width="formLabelWidth" prop="description">
        <el-input v-model="addPermissionInfo.description" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="开启" :label-width="formLabelWidth">
        <el-switch
          v-model="addPermissionInfo.isOpen"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'addPermission',
  data(){
    return {
      formLabelWidth:'120px',
      dialogFormVisible:true,
      //收集的数据
      addPermissionInfo:{
         name:"",
         code:"",
         description:"",
        isOpen:""
      },
      //验证规则
      rules:{
        name:[{required: true, message: '请输入活动名称', trigger: 'blur' }],
        code:[{required: true, message: '请输入活动名称', trigger: 'blur'}],
        description: [{required: true, message: '请输入活动名称', trigger: 'blur'}]
      }
    }
  }
}
</script>

<style scoped>

</style>
