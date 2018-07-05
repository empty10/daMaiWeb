import axios from './index';

export function queryCheckLogin() {
    return axios.post('/personal/checkLogin')
}
//=>登录
export function queryLogin(payload) {
    return axios.post('/personal/login',payload)
}
export function queryRegister(payload) {
    return axios.post('/personal/register',payload)
}