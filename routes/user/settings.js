const exp = require('express');
const uploads = require('../../multer');
const util = require('../../utilities');
const db = require('../../db');

const router = exp.Router()

router.get('/user/settings',util.sign,(req,res)=>{
    db.User.find({petname:req.cookies.petname},(err,data)=>{
        res.render('user/settings',{
            title:'个人资料',
            petname:req.cookies.petname,
            email:data[0].email,
            isMale:data[0].isMale
        })
        console.log(data)
    })
})

router.post('/api/user/photo',util.sign,uploads.single('photo'),(req,res)=>{
    res.render('user/settings',{
        petname:req.cookies.petname
    })
})




module.exports = router;