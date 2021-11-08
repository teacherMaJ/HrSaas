import Vue from 'vue'
import {imageerror} from '@/directive'
Vue.directive('imageerror',imageerror)
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import commonTools from "@/components/commonTools"
import * as API from "@/api"
window.$API = API
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false
/* 注册全局组件 */
Vue.component('commonTools',commonTools)
/* 注册全局指令 */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
