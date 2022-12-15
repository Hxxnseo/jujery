$(function() {
    $(".beforeMenu").on("click", function () {
        $(".wrapper1").slideDown();
        $(".beforeMenu").hide();
        $(".afterMenu").show();
        });
    
        $(".afterMenu").on("click", function () {
        $(".wrapper1").slideUp();
        $(".afterMenu").hide();
        $(".beforeMenu").show();
        });

        
    const logoMenu = $(".footer").offset().top;

    

    $(window).on("scroll", function (e) {
    console.log($(document).scrollTop());

    if ($(document).scrollTop() > 1620) {
        $(".menu .gnb li a").css("color", "white");
        $(".logo h1 img").attr("src", "../../../images/logo/main_white_logo.png");
    } else {
        $(".menu .gnb li a").css("color", "black");
        $(".logo h1 img").attr("src", "../../../images/logo/detail_black_logo.png");
    }
    });

    $('.logoguide').css({'opacity':'0'});
    
    $('section').css('opacity', '0');
    $(window).on("scroll", function() {
        var sc_top = $(this).scrollTop();
        console.log(sc_top);
        
        if($(this).scrollTop() > 200){
            $('.logoguide').animate({'opacity':'1'}, 1000);
        }
        if($(this).scrollTop() > 800){
            $('.button').animate({'opacity':'1'}, 1000);
        }
        if($(this).scrollTop() > 1000){
            $('.snsImg').animate({'opacity':'1'}, 1000);
        }
        if($(this).scrollTop() > 1900){
            $('.warning').animate({'opacity':'1'}, 1000);
        }
    });    

    
})