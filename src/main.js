/*
 * @FilePath: \vue2_template\src\main.js
 * @Author: zhangxin
 * @Date: 2023-05-24 14:54:14
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-24 15:21:50
 * @Description:
 */
import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/reset.scss';
import './utils/ElementUI';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
