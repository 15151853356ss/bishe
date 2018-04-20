const exp = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const template = require('./template');

const app = exp();

app.use(exp.static('www'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.engine('html',template.__express);
app.set('view engine','html');

// 使用routes
app.use(require('./routes/index'));

app.use(require('./routes/user/signin'));
app.use(require('./routes/user/register'));
app.use(require('./routes/user/personal'));
app.use(require('./routes/user/photo'));


app.use(require('./routes/ask'))


app.listen(4000,()=>{
    console.log('4000===');
})
