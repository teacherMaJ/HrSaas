/* 
   逻辑：判断有没有token
            有token:判断地址是否是login
                                 是：阻止【next(false)】
                                 否：放行
            没有token:
                    判断去的地址是否是白名单【不需要token的】
                                  是的话则放行，
                                  不是则跳转到登录页面

*/   
import router from "@/router"
import store from "@/store"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
//token
//白名单
const whiteList = ['/login','/404']
router.beforeEach((to,from,next)=>{
  NProgress.start()
  if(store.getters.token){
    console.log(1);
     if(to.path === '/login'){
       console.log(2);
       next('/')
     }else{
       console.log(3);
       next()
     }
  }else{
    //判断去的是否是白名单
    if(whiteList.includes(to.path)){
      next()
    }else{
      next('/login')
    }
  }
  NProgress.done()
})
//后置守卫
router.afterEach(()=>{
  //关闭进度条
  NProgress.done()
})