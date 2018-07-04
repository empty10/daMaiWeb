const express = require('express'),
    route = express.Router(),
    {writeFile} = require('../utils/promiseFS'),
    ORDER_PATH = './json/order.json',
    utils = require('../utils/utils');

route.post('/add', (req, res)=>{
    let personID = req.session.personID,
        {projectId} = req.body;
    projectId = parseFloat(projectId);

    //=>已经登录状态下，把信息直接存储到JSON中即可
    if (personID) {
        utils.ADD_ORDER(req, res, projectId).then(() => {
            res.send({code: 0, msg: 'OK!'});
        }).catch(() => {
            res.send({code: 1, msg: 'NO!'});
        });
        return;
    }

    //TODO 未登录：data,dataTime等信息没有
    //=>未登录状态下，临时存储到SESSION中，等到下一次登录成功，直接把信息存储到文件中（并且清空SESSION中的信息）
    !req.session.orderList ? req.session.orderList = [] : null;
    req.session.orderList.push(projectId);
    res.send({code: 0, msg: 'OK!'});

});

route.post('/pay', (req, res)=>{
    let {orderId} = req.body,
        personID = req.session.personID,
        isUpdate = false;
    if (personID) {
        req.orderDATA = req.orderDATA.map(item => {
            if (parseFloat(item.orderId) === parseFloat(orderId) && parseFloat(item.personID) === parseFloat(personID)) {
                isUpdate = true;
                return {...item, state: 1};
            }
            return item;
        });
        if (isUpdate) {
            writeFile(ORDER_PATH, req.orderDATA).then(() => {
                res.send({code: 0, msg: 'OK!'});
            }).catch(() => {
                res.send({code: 1, msg: 'NO!'});
            });
        } else {
            res.send({code: 1, msg: 'NO!'});
        }
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