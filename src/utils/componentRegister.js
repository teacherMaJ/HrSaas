import commonTools from "@/components/commonTools"
import workCalendar from "@/components/work-calendar"
export default{
    install(Vue){
        Vue.component('commonTools',commonTools)
        Vue.component('workCalendar',workCalendar)
    }
}
