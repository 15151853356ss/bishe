const exp = require('express');
const util = require('../utilities');
const db = require('../db');

const router = exp.Router();

router.get('/detail/(:id)?', util.sign, (req, res) => {
    console.log(req.params)
    db.Questions.findById(req.params.id).exec((err, data) => {
        if (err) {
            // 
        } else {
            console.log(data);
            var questions = [];
            var answers = [];
            res.render('detail', {
                user: req.cookies.petname,
                questions:data,
                answers:data.answers
            })
        }
    })
})

router.post('/detail/api/answer',util.sign,(req,res)=>{
    var petname = req.cookies.petname;

    req.body.petname = petname;
    req.body.ip = req.ip;
    req.body.time = new Date();
    var id = req.body.id;
    db.Questions.findByIdAndUpdate(id,{$push:{answers:req.body}},(err,data)=>{
        console.log(data);
        util.send(res,'success');
    })
})


module.exports = router;