const exp = require('express');
const fs = require('fs');
const db = require('../../db');

const router = exp.Router();

router.get('/user/register',(req,res)=>{
    res.render('user/register',{
        title:'注册'
    });
});

router.post('/api/user/register',(req,res)=>{
    req.body.ip = req.ip;
    req.body.time = new Date();

    db.User(req.body).save(err=>{
        if (err) {
            res.json({code:'error',message:'注册失败'});
        } else {
            res.json({code:'success',message:'注册成功'});
        }
    });
});

router.get('/api/user/xieyi',(req,res)=>{
    res.render('xieyi')
})


module.exports = router;