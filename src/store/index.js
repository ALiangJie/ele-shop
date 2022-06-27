import {createStore} from 'vuex'

// 对外暴露
export const store = createStore({
    //仓库存储数据的地方
    state: {
        count: 0
    },
    //修改state的唯一手段
    mutations: {
        add(state) {
            state.count++
        }
    },
    //处理action，可以书写自己的业务逻辑，处理异步，不修改state
    actions: {
        add(context) {
            context.commit('add')
        }
    },
    //计算属性，简化仓库数据，让组件获取仓库数据更加方便
    getters() {

    },
})