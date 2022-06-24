import {createRouter, createWebHistory} from 'vue-router'

//引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

//配置路由
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/:pathMatch(.*)*',
        name: 'redirect',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home,
        meta: {show: true}
    }, {
        path: '/login',
        component: Login,
        meta: {show: false}
    }, {
        path: '/register',
        component: Register,
        meta: {show: false}
    }, {
        path: '/search/:keyword',
        component: Search,
        meta: {show: true}
    }]
})

export default router

