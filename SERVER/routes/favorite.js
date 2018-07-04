const express = require('express'),
    route = express.Router(),
    FAVORITE_PATH = './json/favorite.json',
    {writeFile} = require('../utils/promiseFS');

route.post('/add', (req, res)=>{

    let personID = req.session.personID,
        {projectId} = req.body;

    if(personID) {
        let favorite = {
            favoriteId: req.favoriteDATA.length === 0 ? 1 : (parseFloat(req.favoriteDATA[req.favoriteDATA.length - 1].favoriteId) + 1),//=>ID自增长
            projectId,
            personID
        };
        req.favoriteDATA.push(favorite);
        writeFile(FAVORITE_PATH, req.favoriteDATA);

        res.send({code: 0, msg: 'OK!'});

        return;
    }

    res.send({code: 1, msg: 'NO LOGIN!'});

});

route.get('/list', (req, res)=>{
    let personID = req.session.personID;

    if(personID){

        let favorites = req.favoriteDATA.filter(favorite=>{
            return parseFloat(favorite.personID) === parseFloat(personID);
        });

        let projects = [];
        if(favorites){
            favorites.forEach(fa=>{
                let pro = req.projectsDATA.find(p=>{
                    return parseFloat(p.projectId) === parseFloat(fa.projectId);
                });
                projects.push(pro);
            });
        }

        if (projects) {
            res.send({
                code: 0,
                msg: 'OK!',
                data: projects
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