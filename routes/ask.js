const exp = require('express');
const util = require('../utilities');
const db = require('../db');

const router = exp.Router();

router.get('/ask',util.sign,(req,res)=>{
    res.render('ask',{
        title:'提问',
        user:req.cookies.petname
    })
})

router.post('/api/ask',util.sign,(req,res)=>{
    console.log(req.body)
    var petname = req.cookies.petname;
    var time = new Date();

    req.body.petname = petname;
    req.body.ip = req.ip;
    req.body.time = time;

    db.Questions(req.body).save(err=>{
        if (err) {
            util.send(res,'file error','抱歉，系统错误！');
        } else {
            util.send(res,'success','问题提交成功！');
        }
    })
})


module.exports = router;
