/*
 * @Author: zhangyang
 * @Date: 2022-01-10 10:45:38
 * @LastEditors: zhangyang
 * @LastEditTime: 2022-01-10 10:45:39
 * @Description: file content
 */
import { curry } from 'lodash';
const setTitle = (title) => {
    return title;
}
const setType = (type) => {
    return type;
}
const setMsg = (msg) => {
    return msg;
}
const setOptions = (title, type, msg) => {
    return {
        title: setTitle(title),
        type: setType(type),
        message: setMsg(msg),
        duration: 5000,
        position: 'top-right',
        offset: 70
    }
}

export const SetNotify = curry(setOptions);
export const SetNotifySuccess = curry(setOptions)('成功!', 'success');
export const SetNotifyWarning = curry(setOptions)('警告!', 'warning');
export const SetNotifyError = curry(setOptions)('异常!', 'error');