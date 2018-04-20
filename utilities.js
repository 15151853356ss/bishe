function send(res,code,message,data){
    res.status(200).json({code,message,data})
}

function sign(req,res,next){
    if (req.cookies.petname) {
        
        next()
    } else {
        if (req.xhr) {
            send(res,'signin error','请重新登录！')
        } else {
            res.redirect('/user/signin')
        }
    }
}

module.exports = {send,sign}