$(document).ready(function(){

    
    // 메인이랑 서브 구별

    let url = window.location.href;
    console.log(url);

    $('header').load('include/header.html',function(){
        $('.lnb_bg').on(
            {mouseover:function(){
            $('.gnb .lnb').css({maxHeight:300}
            )} , mouseout:function(){
                $('.gnb .lnb').css({maxHeight:''})
            }
        });
        $('header .centerbox nav .ham').on('click',function(){
            $(this).toggleClass('on');
            $('header .centerbox nav .navbg').stop().fadeToggle();
        });

        url = window.location.href;

        $('header .navbox .lnb li a').on('click',function(event){
            event.preventDefault();
            var linkText = $(this).text();
            var aUrl = $(this).attr('href');
            var targetUrl = aUrl + "?data=" + encodeURIComponent(linkText);
            window.location.href = targetUrl; // 새 URL로 이동합니다.
        })

        function getUrlParameter(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }

        var data = getUrlParameter('data'); // URL에서 'data' 파라미터를 가져옵니다.
        if (data) {
            // $("body").append("<p>Received data: " + data + "</p>"); // 받은 데이터를 페이지에 표시합니다.
            if (url.indexOf('sub')>-1){
                $('.sub_section .sub_title h2').text(data)
            }
        }


        if (url.indexOf('sub')>-1) {


        }

    })


    // 서브페이지 여기에다가
    // if (url.indexOf('sub')>-1) {
    //     $('header .navbox li .lnb li a').on('click',function(){
    //         let navboxText = $(this).text();
    //         console.log(navboxText);
    //         $('.sub_section .sub_title h2').text(navboxText);
    //     })
    // }
})
