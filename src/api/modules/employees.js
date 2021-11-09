//员工管理
import request from '@/utils/request'

export function getAll({page,size}){
  return request({
    url:'/sys/user',
    method:'GET',
    params:{page,size}
  })
}
