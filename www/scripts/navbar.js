var count = 0;
function navShow() {
    count++;
    var navList = document.querySelector('.nav-list');
    if (count % 2 == 0) {
        navList.style.height = 0;
    }else{
        navList.style.height = '230px';
    }
}

$('div.user').mouseenter(function(){
    $('div.user .drop-menu').css('display','block');
})
$('div.user').mouseleave(function(){
    $('div.user .drop-menu').css('display','none');
})

$('li.user').mouseenter(function(){
    $('li.user .drop-menu').css('display','block');
})
$('li.user').mouseleave(function(){
    $('li.user .drop-menu').css('display','none');
})