const express = require('express'),
    route = express.Router(),
    utils = require('../utils/utils');

route.get('/list', (req, res)=>{
    let {type=0, limit=10, page=1} = req.query;

    limit = parseFloat(limit);
    page = parseFloat(page);

    //=>筛选
    if (parseFloat(type) !== 0) {
        req.projectsDATA = req.projectsDATA.filter(item => {
            return item.type === type;
        });
    }

    //=>分页
    let total = Math.ceil(req.projectsDATA.length / limit),
        result = [];
    if (page <= total) {
        for (let i = (page - 1) * limit; i <= (page * limit - 1); i++) {
            let item = req.projectsDATA[i];
            if (!item) break;
            result.push(item);
        }
    }
    res.send({
        code: 0,
        msg: 'OK!',
        total,
        limit,
        page,
        data: result
    });
});

route.get('/detail', (req, res)=>{
    let {projectId} = req.query;
    projectId = parseFloat(projectId);
    let item = req.projectsDATA.find(item => {
        return parseFloat(item.projectId) === projectId;
    });
    if (item) {
        res.send({
            code: 0,
            msg: 'OK!',
            data: item
        });
        return;
    }

    res.send({
        code: 1,
        msg: 'NO!',
        data: null
    });
});

route.get('/orderNow', (req, res)=>{
    let {projectId} = req.query;
    projectId = parseFloat(projectId);
    let item = req.fieldDATA.filter(item=>{
        return parseFloat(item.projectId) === projectId;
    });
    if (item) {
        res.send({
            code: 0,
            msg: 'OK!',
            data: item
        });
        return;
    }

    res.send({
        code: 1,
        msg: 'NO!',
        data: null
    });
});

module.exports = route;