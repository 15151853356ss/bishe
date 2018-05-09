const exp = require('express');
const util = require('../../utilities');
const db = require('../../db');

const router = exp.Router();

router.get('/user/personal',util.sign,(req,res)=>{
    res.render('user/personal',{
        title:'个人中心',
        user:req.cookies.petname
    })
});



module.exports = router;