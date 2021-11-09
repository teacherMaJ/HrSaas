//员工管理
import request from '@/utils/request'
//得到所有的员工
export function getAll({page,size}){
  return request({
    url:'/sys/user',
    method:'GET',
    params:{page,size}
  })
}
//获取所有的角色列表
export function getRoles({page,pagesize}){
  return request({
    url:"/sys/role",
    method:"GET",
    params:{
      page,
      pagesize
    }
  })
}
//根据员工的id获取它当前的角色
export function  getRolesById(id){
  return request({
    method:'GET',
    url:`/sys/role/${id}`
  })
}
//根据id获取给员工分配角色
export function  assignRoles({id,roleIds}){
  return request({
    url:'',
    method:"PUT",
    data:{
      id,
      roleIds
    }
  })
}
