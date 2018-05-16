$('.photo1').click(function(){
    console.log('===')
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
$('.two').submit(function(ev){
    ev.preventDefault();

    var data = $(this).serialize();
    console.log(data);
    $.post('/api/user/update',data,function(res){
        console.log(res);
        location.reload();
    })
})