$(function() {
    const logoMenu = $(".footer").offset().top;

    console.log(100);

    $(window).on("scroll", function (e) {
    console.log($(document).scrollTop());

    if ($(document).scrollTop() > 4086) {
        $(".menu .gnb li a").css("color", "white");
        $(".logo h1 img").attr("src", "../../../images/logo/main_white_logo.png");
    } else {
        $(".menu .gnb li a").css("color", "black");
        $(".logo h1 img").attr("src", "../../../images/logo/detail_black_logo.png");
    }
    });

    
})