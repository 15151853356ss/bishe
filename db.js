// db.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/zhihu-wenda');
const db = mongoose.connection;

db.on('error',(err)=>{
    console.log('数据库连接失败',err);
});
db.on('open',()=>{
    console.log('数据库打开成功');
});


exports.User = mongoose.model('users',{
    petname:String,
    password:String,
    isMale:Boolean,
    email:String,
    phone:String,
    ip:String,
    time:Date
});

exports.Questions = mongoose.model('questions',{
    content:String,
    topic:String,
    description:String,
    petname:String,
    ip:String,
    time:Date,
    answers:[{
        question:String,
        content:String,
        petname:String,
        ip:String,
        time:Date
    }]
});