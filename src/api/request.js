// 对axios进行二次封装
import axios from 'axios'
//引入进度条插件
import NProgress from 'nprogress'
//引入进度条的样式
import 'nprogress/nprogress.css'

//利用axios对象方法create去创建一个axios实例
const requests = axios.create({
    // 设置baseURL，在发送请求时自动添加api路径（因为接口中都带有/api）
    baseURL:'/api',
    // 超时拦截，超时5s就中断请求
    timeout:5000
})
// 设置请求拦截器
requests.interceptors.request.use((config)=>{
    //开启进度条
    NProgress.start()
    // 以请求头的方式把uuid传递给服务器，（请求头的名字是后台定义好的，不能随便写）
    localStorage.getItem('uuid') && (config.headers.userTempId = localStorage.getItem('uuid'))
    // 以请求头的方式将token字段带给服务器，获取用户信息
    localStorage.getItem('token') && (config.headers.token = localStorage.getItem('token'))
    return config
})

// 设置响应拦截器
requests.interceptors.response.use((res)=>{
    //关闭进度条
    NProgress.done()
    return res.data
},(error)=>{
    // 错误提示
    return Promise.reject(new Error('fail'))
})

//对外暴露
export default requests