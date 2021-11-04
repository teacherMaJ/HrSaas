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
    }
}