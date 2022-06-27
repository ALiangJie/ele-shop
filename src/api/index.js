// 封装api，进行统一管理
import requests from './request'

// 获取三级分类列表
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

// // 引入mock的AJAX
// import mockRequest from './mockRequest'
//
// // 获取轮播图mock数据
// export const reqBannerList = () => mockRequest({ url: '/banner', method: 'get' })
//
// // 获取floor的mock数据
// export const reqFloorList = () => mockRequest.get('/floor')
//
// // 获取搜索数据
// export const reqSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })
//
// // 获取商品详情信息
// export const reqGoodsDetail = (params) => requests({ url: `/item/${params}`, method: 'get' })
//
// // 添加商品到购物车/修改商品数量
// export const reqAddGoodOrUpdate = (params) => requests({ url: `/cart/addToCart/${params.skuId}/${params.skuNum}`, method: 'post' })
//
// // 获取购物车数据
// export const reqGetCartList = () => requests({ url: '/cart/cartList', method: 'get' })
//
// // 改变购物车中商品的选中状态
// export const reqChangeIschecked = (params)=> requests({url:`/cart/checkCart/${params.skuId}/${params.isChecked}`,method:'get'})
//
// // 删除购物车商品
// export const reqDeleteCartGood = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
//
// // 登录
// export const reqLogin = (params)=>requests({url:'/user/passport/login',method:'post',data:params})
//
// // 退出登录
// export const reqLogout = ()=>requests({url:'/user/passport/logout',method:'get'})
//
// // 注册
// export const reqRegister = (params)=>requests({url:'/user/passport/register',method:'post',data:params})
//
// // 获取注册验证码
// export const reqGetRegisterCode = (params)=>requests({url:`/user/passport/sendCode/${params}`,method:'get'})
//
// // 通过token获取用户信息
// export const reqGetUserInfoByToken = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})
//
// // 获取订单交易页信息
// export const reqGetOrderTrade = ()=>requests({url:'/order/auth/trade',method:'get'})
//
// // 获取用户地址信息 (服务器没有返回数据，已经坏了)
// export const reqGetUserAddressList = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})
//
// // 提交订单按钮
// export const reqSubmitOrder = (params)=>requests({
//     url:`/order/auth/submitOrder?tradeNo=${params.tradeNo}`,
//     method:'post',
//     data:{
//         consignee:params.consignee,
//         consigneeTel:params.consigneeTel,
//         deliveryAddress:params.deliveryAddress,
//         paymentWay:params.paymentWay,
//         orderComment:params.orderComment,
//         orderDetailList:params.orderDetailList
//     }
// })
//
// // 获取订单支付信息,立即支付按钮
// export const reqGetPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`})
//
// // 获取订单支付状态
// export const reqGetOrderState = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`})
//
// // 获取我的订单列表
// export const reqGetMyOrderList = (params)=>requests({url:`/order/auth/${params.page}/${params.limit}`})