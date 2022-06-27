import {createStore} from 'vuex'

//导入home、search模块小仓库
import home from './home'
import search from './search'

// 对外暴露
export const store = createStore({
    //vuex仓库模块式开发存储数据
    modules:{
        home,
        search
    }
})