/*
 * @FilePath: \vue2_template\src\api\user.js
 * @Author: zhangxin
 * @Date: 2023-05-24 15:07:15
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-24 15:08:05
 * @Description:
 */
import request from '@/utils/request';

export const login = data => {
    return request({
        url: `/login`,
        method: 'POST',
        data: data,
    });
};
