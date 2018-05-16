const exp = require('express');
const util = require('../../utilities');
const db = require('../../db');

const router = exp.Router();

router.get('/user/personal',util.sign,(req,res)=>{
    db.Questions.find({petname:req.cookies.petname},(err,data)=>{
        console.log(data)
        if (err) {
            // 
        } else {
            var questions = [];
            var answers = [];
            res.render('user/personal', {
                title:'个人中心',
                complete:'完善个人资料',
                user: req.cookies.petname,
                questions:data,
                answers:data.answers
            })
        }
    })
});

router.get('/personal/(:petname)?',util.sign,(req,res)=>{
    console.log(req.params.petname)
    db.Questions.find({petname:req.params.petname},(err,data)=>{
        console.log(data)
        if (err) {
            // 
        } else {
            var questions = [];
            var answers = [];
            res.render('user/personal', {
                title:'个人中心',
                user: req.params.petname,
                questions:data,
                answers:data.answers
            })
        }
    })
})

module.exports = router;