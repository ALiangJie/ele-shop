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
        component: Home
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/register',
        component: Register
    }, {
        path: '/search',
        component: Search
    }]
})

export default router

