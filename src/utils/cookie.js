/*
 * @Author: yjl
 * @Date: 2021-05-17 15:27:50
 * @LastEditors: yjl
 * @LastEditTime: 2021-05-18 17:35:53
 * @Description: file content
 */
import Cookies from 'js-cookie'
// import { TOKEN_KEY } from '@/config/constant'

// export function getToken() {
//     return Cookies.get(TOKEN_KEY)
// }

// export function setCookie(token) {
//     return Cookies.set(TOKEN_KEY, token, { domain: '' })
// }

// export function removeToken() {
//     return Cookies.remove(TOKEN_KEY)
// }

export function getCookie(tokenKey) {
    return Cookies.get(tokenKey)
}

export function setCookie(tokenKey, token) {
    return Cookies.set(tokenKey, token, { domain: '' })
}

export function removeCookie(tokenKey) {
    return Cookies.remove(tokenKey)
}