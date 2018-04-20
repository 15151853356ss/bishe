const exp = require('express');
const db = require('../../db');
const util = require('../../utilities');

const router = exp.Router();

router.get('/user/signin',(req,res)=>{
    res.render('user/signin',{
        title:'登录',
        rightNav:'register'
    });
});

router.get('/user/signout',(req,res)=>{
    res.clearCookie('petname');
    res.redirect('/');
});

router.post('/api/user/signin',(req,res)=>{
    db.User.find({petname:req.body.petname})
            .select('petname password')
            .exec((err,data)=>{
                if (err) {
                    // 错误
                    res.render('error')
                } else {
                    if (data.length == 0) {
                        util.send(res,'register error','用户名未注册');
                    } else {
                        if (data[0].toObject().password === req.body.password) {
                            res.cookie('petname',req.body.petname);
                            util.send(res,'success','登录成功');
                        } else {
                            util.send(res,'signin error','密码错误，请重试');
                        }
                    }
                }
            })
})


module.exports = router;