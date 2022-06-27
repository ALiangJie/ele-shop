import App from './App.vue'
import {createApp} from 'vue'
//引入路由
import router from './router/index'
//引入状态存储库
import {store} from "@/store";

//三级联动组件-全局组件
import TypeNav from "@/components/TypeNav";

//注册路由
createApp(App).component(TypeNav.name, TypeNav).use(router).use(store).mount('#app')
