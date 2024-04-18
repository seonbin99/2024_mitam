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
$('#visual .textbox').css({zIndex:20})
$('#visual .textbox h2').css({zIndex:20})
$('#visual .deco ').css({zIndex:1})