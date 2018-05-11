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
            res.render('detail', {
                user: req.cookies.petname,
                questions:data
            })
        }
    })
})


module.exports = router;