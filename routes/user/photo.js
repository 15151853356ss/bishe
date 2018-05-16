const exp = require('express');
const util = require('../../utilities');
const uploads = require('../../multer');
const db = require('../../db');

const router = exp.Router();

router.get('/user/photo', util.sign, (req, res) => {
    db.User.find({ petname: req.cookies.petname }, (err, data) => {
        res.render('user/photo', {
            title: '个人资料',
            user: req.cookies.petname,
            email: data[0].email,
            isMale: data[0].isMale,
            phone: data[0].phone,
            description: data[0].description
        })
        console.log(data)
    })
})

router.post('/api/user/photo', util.sign, uploads.single('photo'), (req, res) => {
    res.json({code:'success',message:'头像上传成功'})
})

router.post('/api/user/update', util.sign, (req, res) => {
    console.log(req.body)
    var isMale = req.body.isMale;
    var email = req.body.email;
    var phone = req.body.phone;
    var description = req.body.description;

    db.User.update({ petname: req.cookies.petname }, { isMale, email, phone, description }, function (err) {
        if (err) {
            // 
        } else {
            res.json({ code: 'success', message: '修改资料成功' })
        }
    })
})

module.exports = router;