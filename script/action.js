$('.lnb_bg').on(
    {mouseover:function(){
    $('.gnb .lnb').css({maxHeight:300}
    )} , mouseout:function(){
        $('.gnb .lnb').css({maxHeight:''})
    }
})
$('header .centerbox nav .ham').on('click',function(){
    $(this).toggleClass('on');
    $('header .centerbox nav .navbg').stop().fadeToggle();
})