import commonTools from "@/components/commonTools"
import workCalendar from "@/components/work-calendar"
import StandarBox from "@/components/StandarBox"
export default{
    install(Vue){
        Vue.component('commonTools',commonTools)
        Vue.component('workCalendar',workCalendar)
        Vue.component('StandarBox',StandarBox)
    }
}
