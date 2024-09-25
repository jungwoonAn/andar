// 헤더 변형
function transHeader(){
    if(window.scrollY > 100){
        $('.header_bottom').css({position: 'fixed', top: 0, zIndex: 10});
        $('.header_bottom .logo').show();
        $('.header_bottom .icons').show().css('display','flex');
        $('.header_bottom nav').css({width: '72%',});
    }else {
        $('.header_bottom').css({position: 'static'});  
        $('.header_bottom .logo').hide(); 
        $('.header_bottom .icons').hide(); 
        $('.header_bottom nav').css({width: '100%',});
    }
}

$(function(){
    transHeader();
});

$(window).scroll(function(){
    transHeader();
});

// sub메뉴
$('.main_nav > li, .sub_nav > li').hover(function(){
    $(this).children('.sub').stop().slideDown();
}, function(){
    $('nav li').children('.sub').stop().hide();
});

// 베스트셀러 tab
$('#best .tab li').click(function(){
    let idx = $(this).index();

    $('#best .tab li').removeClass('active');
    $(this).addClass('active');

    $('#best .product').hide();
    $('#best .product').eq(idx).show().css('display','flex');
});