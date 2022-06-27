// import axios from 'axios'
// //引入进度条插件
// import NProgress from 'nprogress'
// //引入进度条的样式
// import 'nprogress/nprogress.css'
// const requests = axios.create({
//     // 设置baseURL，在发送请求时自动添加api路径（因为mock接口中都带有/mock）
//     baseURL:'/mock',
//     // 超时拦截，超时5s就中断请求
//     timeout:5000
// })
// // 设置请求拦截器
// requests.interceptors.request.use((config)=>{
//     //开启进度条
//     NProgress.start()
//     return config
// })
//
// // 设置响应拦截器
// requests.interceptors.response.use((res)=>{
//     //关闭进度条
//     NProgress.done()
//     return res.data
// },(error)=>{
//     // 错误提示
//     return Promise.reject(new Error('faile'))
// })
//
// export default requests