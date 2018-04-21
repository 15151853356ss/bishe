$('.photo1').click(function(){
    $(':file').click();
})

$('.one').submit(function(ev){
    ev.preventDefault();
    
    var data = new FormData(this)

    $.post({
        url:'/api/user/photo',
        data:data,
        contentType:false,
        processData:false,
        success:function(res){
            if (res.code == 'success') {
                location.reload()
            } else {
                $('.modal-body').text('头像上传失败');
                $('.modal').modal('show')
            }
        }
    })
})