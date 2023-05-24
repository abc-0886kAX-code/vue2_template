/*
 * @FilePath: \vue2_template\src\stroe\moudle\user.js
 * @Author: zhangxin
 * @Date: 2023-05-24 15:03:58
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-24 15:08:48
 * @Description:
 */
import { login } from '@/api/user';
import { NAME_KEY, TOKEN_KEY } from '@/config';
import { resetRouter } from '@/router';
import { getCookie, removeCookie, setCookie } from '@/utils/cookie';

const state = {
    token: getCookie(TOKEN_KEY) || '',
    name: getCookie(NAME_KEY) || '',
};

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_NAME: (state, name) => {
        state.name = name;
    },
};

const actions = {
    // user login
    login({ commit }, userInfo) {
        const { username, userpwd } = userInfo;
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), userpwd: userpwd })
                .then(response => {
                    const { data } = response;
                    commit('SET_TOKEN', data.token);
                    commit('SET_NAME', data.truename);

                    setCookie(TOKEN_KEY, data.token);
                    setCookie(NAME_KEY, data.truename);
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    // user logout
    logout({ commit, state, dispatch }) {
        return new Promise((resolve, reject) => {
            commit('SET_TOKEN', '');
            commit('SET_NAME', '');

            removeCookie(TOKEN_KEY);
            removeCookie(NAME_KEY);
            resetRouter();
            resolve();
        });
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
