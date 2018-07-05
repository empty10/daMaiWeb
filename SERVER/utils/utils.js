const {writeFile} = require('../utils/promiseFS'),
    ORDER_PATH = './json/order.json';

function ADD_ORDER(req, res, item) {
    //=>把某一个商品存储到JSON中，实现加入购物车的功能

    let {projectId, data, dataTime, week, count} = item;

    let personID = req.session.personID,
        orderDetail = {
            orderId: req.orderDATA.length === 0 ? 1 : (parseFloat(req.orderDATA[req.orderDATA.length - 1].orderId) + 1),//=>ID自增长
            projectId,
            personID,
            data,
            dataTime,
            week,
            count,
            state: 0,//=>默认是不支付
            time: new Date().getTime()
        };
    //=>把数据先存放到原始数组中，最后把原始数组写入到JSON中永久保存
    req.orderDATA.push(orderDetail);
    return writeFile(ORDER_PATH, req.orderDATA);
}

module.exports = {
    ADD_ORDER
};