/*
 * @Author: yjl
 * @Date: 2021-05-07 19:19:53
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-24 15:03:40
 * @Description: file content
 */
const getters = {
    token: state => state.user.token,
    name: state => state.user.name,
};
export default getters;
