/* 获取公司设置的请求 */
import request from "@/utils/request"

export function getRoleList({page,pagesize}){
    
        return request({
            method:"GET",
            url:"/sys/role",
            //query参数
            params:{
                page,
                pagesize
            }
        })
    }
/* 根据id获取公司信息 */
export function getCompanyInfoById(id){
   return request({
        method:'GET',
        url:`/company/${id}`
    })
}
