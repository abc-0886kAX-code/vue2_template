/*
 * @Author: zhangyang
 * @Date: 2021-08-17 16:15:28
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-24 15:03:56
 * @Description: file content
 */
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

import user from './moudle/user';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {
        ...getters,
    },
    mutations: {},
    actions: {},
    modules: {
        user,
    },
});
