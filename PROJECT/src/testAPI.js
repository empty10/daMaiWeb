import axios from 'axios';
import Qs from 'qs';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;//允许跨域（并且允许携带cookie）
axios.defaults.transformRequest = (data = {}) => Qs.stringify(data);//把post、put等，通过请求主体传递给服务器的内容统一处理为x-www-url-encoded格式
axios.interceptors.response.use(result => result.data);//响应拦截器：把服务器返回的信息中响应主体的内容拦截返回，以后在then中获取的结果就是主体的内容
export default axios;

//注册
// let result = axios.post('/personal/register',{
//     userName:'lmh',
//     pwd:'123456789012345678901234'
// }).then((res)=>{
//     console.log(res);
// }).catch((res)=>{
//     console.log(res);
// });

//登录
// let result = axios.post('/personal/login',{
//     userName:'lmh',
//     pwd:'123456789012345678901234'
// }).then((res)=>{
//     console.log(res);
// }).catch((res)=>{
//     console.log(res);
// });

//登录验证
// let result = axios.get('/personal/checkLogin').then((res)=>{
//     console.log(res);
// }).catch((res)=>{
//     console.log(res);
// });

// 退出登录
// let result = axios.get('/personal/logout').then((res)=>{
//     console.log(res);
// }).catch((res)=>{
//     console.log(res);
// });

// 首页搜索
// let result = axios.get('/homepage/search',{
//     params:{
//         searchName:'儿童'
//     }
// }).then(res=>{
//     console.log(res);
// }).catch(res=>{
//     console.log(res);
// });

//轮播图
// let result = axios.get('/homepage/swiper').then(res=>{
//     console.log(res);
// }).catch(res=>{
//     console.log(res);
// });

//热门活动等
// let result = axios.get('/homepage/activity',{
//     params:{
//         type:0,
//         limit:10,
//         page:1
//     }
// }).then(res=>{
//     console.log(res);
// }).catch(res=>{
//     console.log(res);
// });

// 产品列表
// let result = axios.get('/project/list',{
//     params:{
//         type:0,
//         limit:10,
//         page:1
//     }
// }).then(res=>{
//     console.log(res);
// }).catch(res=>{
//     console.log(res);
// });

//产品详情
// let result = axios.get('/project/detail', {
//     params:{
//         projectId:1
//     }
// }).then(res=>{
//     console.log(res);
// }).catch(res=>{
//     console.log(res);
// });

//立即购买
// let result = axios.get('/project/orderNow', {
//     params:{
//         projectId:1
//     }
// }).then(res=>{
//     console.log(res);
// }).catch(res=>{
//     console.log(res);
// });

// 付款确认
// let result = axios.post('/order/add',{
//     projectId:1,
//     data:'2018.07.31',
//     dataTime:'19:30',
//     week:'周日',
//     count:'2'
// }).then(res=>{
//     console.log(res);
// }).catch(res=>{
//     console.log(res);
// });

//付款
// let result = axios.post('/order/pay',{
//     orderId: 3
// }).then(res=>{
//     console.log(res);
// }).catch(res=>{
//     console.log(res);
// });

//我的订单/我的票
//type: 0我的订单 1我的票
// let result = axios.get('/order/list',{
//     params:{
//         type:1
//     }
// }).then(res=>{
//     console.log(res);
// }).catch(res=>{
//     console.log(res);
// });

// 加入收藏
// let result = axios.post('/favorite/add',{
//     projectId:1
// }).then(res=>{
//     console.log(res);
// }).catch(res=>{
//     console.log(res);
// });

//收藏列表
// let result = axios.get('/favorite/list').then(res=>{
//     console.log(res);
// }).catch(res=>{
//     console.log(res);
// });



