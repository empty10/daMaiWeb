const express = require('express'),
    route = express.Router(),
    {writeFile} = require('../utils/promiseFS'),
    ORDER_PATH = './json/order.json';

route.post('/pay', (req, res)=>{
    let personID = req.session.personID,
        isUpdate = false;
    if (personID) {

        let {projectId, data, dataTime, week, count, price} = req.body;

        let orderDetail = {
            orderId: req.orderDATA.length === 0 ? 1 : (parseFloat(req.orderDATA[req.orderDATA.length - 1].orderId) + 1),//=>ID自增长
            projectId,
            personID,
            data,
            dataTime,
            week,
            count,
            price,
            state: 0,//=>默认是不支付
            time: new Date().getTime()
        };
        //=>把数据先存放到原始数组中，最后把原始数组写入到JSON中永久保存
        req.orderDATA.push(orderDetail);

        writeFile(ORDER_PATH, req.orderDATA).then(() => {
            res.send({code: 0, msg: 'OK!'});
        }).catch(() => {
            res.send({code: 1, msg: 'NO!'});
        });
        return;
    }
    res.send({code: 1, msg: 'NO LOGIN!'});
});

route.get('/list', (req, res)=>{
    let personID = req.session.personID,
        {type} = req.query;
    if (type) {
        let item = req.orderDATA.filter(item => {
            return parseFloat(item.state) === parseFloat(type) && parseFloat(item.personID) === parseFloat(personID);
        });

        //增加：项目名称、开始时间
        item.map(key=>{
            let {projectId} = key;
            let project = null;
            if(projectId){
                project = req.projectsDATA.find(item => {
                    return parseFloat(item.projectId) === parseFloat(projectId);
                });
            }
            let {name, time} = project;

            key.name = name;
            key.time = time;

            return key;
        });

        if (item) {
            res.send({
                code: 0,
                msg: 'OK!',
                data: item
            });
            return;
        }
        return;
    }
    res.send({
        code: 1,
        msg: 'NO!',
        data: null
    });
});

module.exports = route;