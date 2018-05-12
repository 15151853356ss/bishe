const exp = require('express');
const db = require('../db');
const util = require('../utilities');

const router = exp.Router();

router.get('/', (req, res) => {
    db.Questions
        .find()
        .exec((err, data) => {
            if (err) {
                // 
            } else {
                // console.log(data);
                var questions = [];
                res.render('index', {
                    user: req.cookies.petname,
                    questions: data.map(m => {
                        m = m.toObject();
                        m.id = m._id.toString();
                        delete m._id;
                        // console.log(m)
                        return m;
                    })
                })
                // console.log(questions)
            }
        })
})


module.exports = router;