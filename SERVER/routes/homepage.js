const express = require('express'),
    route = express.Router(),
    utils = require('../utils/utils');

route.get('/search', (req, res) => {
    let {searchName} = req.query;
    if (searchName) {
        let item = req.projectsDATA.filter(item => {
            return item.name.indexOf(searchName) !== -1;
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

route.get('/swiper', (req, res) => {
    let item = req.swiperDATA;
    if (item) {
        res.send({
            code: 0,
            msg: "OK!",
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

route.get('/activity', (req, res)=>{
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

module.exports = route;