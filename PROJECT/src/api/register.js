import axios from './index';

//=>验证是否登录
export function queryCheckLogin() {
    return axios.get('/personal/checkLogin')
}
//=>登录
export function queryLogin(payload) {
    return axios.post('/personal/login',payload)
}
//注册
export function queryRegister(payload) {
    return axios.post('/personal/person',payload)
}
//退出登录
export function queryLogOut() {
    return axios.get('/personal/logout')
}
//获取列表
export function queryList() {
    return axios.get('/favorite/list')
}