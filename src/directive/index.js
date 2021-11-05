/* 自定义指令 */
//自定义图片指令【图片加载出错时的处理】
export const imageerror = {
    inserted: function (el,options) {
        el.onerror = function(){
            el.src = options.value
        }
      }
}
//指令的注册 【main.js内】