/*
* 权限的API
* */
import request from '@/utils/request'
//获取所有的权限点
export function getAll_Permission(){
   return request({
      url:"/sys/permission",
      method:'GET'
    })
}
