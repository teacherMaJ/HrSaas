import request from "@/utils/request"
export default {
    /* 登录 */
    login({mobile,password}){
        return request({
            method:'POST',
            url:'/sys/login',
            data:{
                mobile,
                password
            }
        })
    },
   
}
 /* 获取用户资料 */
 export function getUserInfo(){
    
    return request({
        method:'post',
        url:"/sys/profile"
    })
} 