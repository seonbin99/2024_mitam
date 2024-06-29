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

    $('footer').load('include/footer.html');


    // 서브페이지 여기에다가
    if (url.indexOf('sub')>-1) {
        
        navEvent();
        // 날짜 커스텀

        var inputDate = $('input[type="date"]');
        var Dateplaceholder = inputDate.siblings('.placeholder');

        if (inputDate.val() !== '') {
            Dateplaceholder.hide();
            inputDate.addClass('focus');
        } else {
            Dateplaceholder.show();
        }

        inputDate.on('click', function(event) {
            
            event.preventDefault(); // Prevent the default action
            $(this).focus();
            $(this).addClass('focus');
            Dateplaceholder.hide();
            
            // Workaround to ensure calendar opens on first click in some browsers
            var el = this;
            setTimeout(function() {
                el.showPicker();
            }, 0);
        });

        // On focus and blur events
        inputDate.on('focus', function() {
            Dateplaceholder.hide();
        });

        inputDate.on('blur', function() {
            if (inputDate.val() === '') {
                Dateplaceholder.show();
                inputDate.removeClass('focus')
            }
        });

        // On change event
        inputDate.on('change', function() {
            if (inputDate.val() !== '') {
                Dateplaceholder.hide();
            } else {
                Dateplaceholder.show();
            }
        });
        // 시간 커스텀

        var inputTime = $('input[type="time"]');
        var Timeplaceholder = inputTime.siblings('.placeholder');

        if (inputTime.val() !== '') {
            Timeplaceholder.hide();
            inputTime.addClass('focus');
        } else {
            Timeplaceholder.show();
        }

        inputTime.on('click', function(event) {
            
            event.preventDefault(); // Prevent the default action
            $(this).focus();
            $(this).addClass('focus')
            
            // Workaround to ensure calendar opens on first click in some browsers
            var el = this;
            setTimeout(function() {
                el.showPicker();
            }, 0);
        });

        // On focus and blur events
        inputTime.on('focus', function() {
            Timeplaceholder.hide();
        });

        inputTime.on('blur', function() {
            if (inputTime.val() === '') {
                Timeplaceholder.show();
                inputTime.removeClass('focus')
            }
        });

        // On change event
        inputTime.on('change', function() {
            if (inputTime.val() !== '') {
                Timeplaceholder.hide();
            } else {
                Timeplaceholder.show();
            }
        });

        inputTime.on('click', 'input', function(event) {
            $(this).blur(); // 분 선택 후 선택창 닫기
          });
    }

    // 공지사항 여기에다가

    if (url.indexOf('notice')>-1) {
        navEvent();

        // 공지사항 클릭시 내용 보이게 이벤트

        $('#notice .sub_section .notiBox').click(function(){
            $(this).toggleClass('active');
        })

        $('#notice .sub_section .section2 .contents .bannerContent a').click(function(){
            alert('이벤트 준비중입니다.')
        })
    }

    function navEvent (){
        if($(window).width() > 640) {
            $('.navbar').removeClass('mo');
        } else {
            $('.navbar').addClass('mo');

        }

        $('.navbar li').on('click',function(){
            $('.navbar li').removeClass('on')

            $(this).addClass('on');

            let dataNav = $(this).attr('data-nav');

            console.log(dataNav);
            $(".sub_section section.focus").removeClass("focus");
            $(".sub_section section[data-nav='" + dataNav + "']").addClass("focus");

            let navText = $(this).text();
            console.log(navText);

            $('.sub_section .sub_title p').text(navText);
        })

    }
})
