import {createApp} from 'vue'
import App from './App.vue'
//引入路由
import router from './router/index'

//三级联动组件-全局组件
import TypeNav from "@/components/TypeNav";

//注册路由
createApp(App).component(TypeNav.name, TypeNav).use(router).mount('#app')
