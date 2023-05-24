/*
 * @Author: zhangxin
 * @Date: 2023-05-24 15:09:39
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-24 15:30:45
 * @Description:
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/home';
import Debug from '@/pages/debug';

// import Store from '@/store'
// import { TOKEN_KEY } from '@/config/constant'
// import { getCookie } from '@/utils/cookie'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/debug',
        name: 'debug',
        component: Debug,
    },
];

const createRouter = () =>
    new VueRouter({
        // mode: 'history', // require service support
        scrollBehavior: () => ({ y: 0 }),
        routes: routes,
    });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher; // reset router
}

// const whiteList = ['/login'] // no redirect whitelist
// router.beforeEach((to, from, next) => {
//     // determine whether the user has logged in
//     const hasToken = getCookie(TOKEN_KEY);

//     if (hasToken) {
//         if (to.path === '/login') {
//             // if is logged in, redirect to the home page
//             next({ path: '/' })
//         } else {
//             next()
//         }
//     } else {
//         /* has no token*/
//         if (whiteList.indexOf(to.path) !== -1) {
//             // in the free login whitelist, go directly
//             next()
//         } else {
//             Store.dispatch('user/logout').then(res => {
//                 // other pages that do not have permission to access are redirected to the login page.
//                 next(`/login`)
//             })
//         }
//     }
// })

// router.afterEach(() => {

// })

export default router;
