import axios from './index';

//=>获取轮播图数据
export function queryBanner() {
    return axios.get('/homepage/swiper');
}
//=>获取活动列表信息
export function queryActivityData(payload) {
    let {limit,page,type} = payload;
    return axios.get('/homepage/activity',{
        params:{
            limit,
            page,
            type
        }
    })
}
export  function querySearch(searchName) {
    return axios.get('/homepage/search',{
        params: {searchName}
    })
}