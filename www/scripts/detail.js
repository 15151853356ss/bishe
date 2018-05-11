$('.answer-form').submit(function(ev){
    ev.preventDefault();
    var formData = $(this).serialize();
    console.log(formData);
})