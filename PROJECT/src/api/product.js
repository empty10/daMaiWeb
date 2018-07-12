import axios from './index';

//获取产品详情
export function queryInfo(projectId) {
    return axios.get('/project/detail', {
        params: {projectId}
    })
}

//加入收藏
export function addCollection(projectId) {
    return axios.post('/favorite/add', {
        projectId
    })
}

//移除收藏


//获取收藏列表
export function queryCollectedList() {
    return axios.get('/favorite/list')
}

//立即购买
export function buyNow(projectId) {
    return axios.get('/project/orderNow', {
        params: {projectId}
    })
}

//立即付款
export function payNow({projectId,data,dataTime,week,count,price}) {
    return axios.post('/order/pay', {
        projectId,
        data,
        dataTime,
        week,
        count,
        price
    })
}