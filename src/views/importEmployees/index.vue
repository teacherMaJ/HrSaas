<template>
  <div>
      <!-- 处理上传的 -->
      <upload-excel-component :on-success="handleSuccess"/>
      <!-- 展示上传界面的 -->


  </div>
</template>

<script type="text/ecmascript-6">
  import UploadExcelComponent from "./components/uploadExcel"
  export default {
      data(){
          return {

          }
      },
      components:{
          UploadExcelComponent
      },
      methods:{
          handleSuccess({header,results}){
            //向后端接口提交的数据是results中的数据，需要将中文字段转为英文字段
            /* 1.先设置一个对照关系 */
           
             const userRelations = {
                    '姓名': 'username',
                    '年龄': 'age',
                    '民族': 'nation',
                    '日期': 'date'
                    
              }
              /* 2.遍历ruesult */
              const arr = []
              results.forEach(item=>{
                  const obj = {}
                  Object.keys(item).forEach(key=>{
                      if(userRelations[key] ==='date'){
                         obj[userRelations[key]] = new Date(this.formatDate(item[key],'-'))
                      }else{
                          obj[userRelations[key]] =  item[key]
                      }
                       

                  })
                arr.push(obj)
              })
              /* 3.发请求带着arr的数据 */
              console.log(arr);
          },
          /* 定义日期格式化函数 */
              formatDate(numb, format) {
                const time = new Date((numb - 1) * 24 * 3600000 + 1)
                time.setYear(time.getFullYear() - 70)
                const year = time.getFullYear() + ''
                const month = time.getMonth() + 1 + ''
                const date = time.getDate() - 1 + ''
                if (format && format.length === 1) {
                    return year + format + month + format + date
                }
                return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date)
            }
      }
  }
</script>

<style scoped>

 
</style>
