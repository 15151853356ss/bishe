$('form').submit(function (ev) {
    ev.preventDefault();

    var formData = $(this).serialize()
    console.log(formData)

    $.post('/api/ask', formData, function (res) {
        $('.modal-body').text(res.message);
        $('.modal').modal('show')
            .on('hidden.bs.modal', function (e) {
                if (res.code == 'success') {
                    location.href = '/'
                }else{
                    $('.modal-body').text('提交失败！')
                    $('.modal').modal('show')
                }
            })
    })
})