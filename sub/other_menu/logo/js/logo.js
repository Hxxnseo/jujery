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
})