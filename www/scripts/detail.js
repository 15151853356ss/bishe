$('.answer-form').submit(function(ev){
    ev.preventDefault();
    var formData = $(this).serialize();
    console.log(formData);

    $.post('api/answer',formData,function(res){
        if (res.code == 'success') {
            $('textarea').val('');
            location.reload()
        }
    })
})