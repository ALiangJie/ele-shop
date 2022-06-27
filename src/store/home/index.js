// home模块仓库

//三级列表数据
import {reqCategoryList} from "@/api";

const state = {
    //初始值
    categoryList:[]
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
}
const actions = {
    //通过api接口函数调用，向服务器发请求
    async categoryList({commit}) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}