// aside - slider
$(document).ready(function() {
    $('.slider').bxSlider();
});

// section2
$(function() {
    $('.rec-item button').on("click", function() {
        $(this).parent()
        .next()
        .css("display","block");
    });
    $('.flip-info button').on("click", function() {
        $(this).
        parent()
        .css("display","none");
    });


// 좋아요 버튼
    $('.heart').on("click", function() {
        $(this).next()
        .css("display","block");
    });
    $('.heart_full').on("click", function() {
        $(this)
        .css("display","none");
    });


// slick slider
    $('.multiple-items').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.brewery_item').slick({
        row: 1,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1
    });

// section3 아코디언탭 on mobile
    $('.brewery_content .brewery_box .text a').click(function(e) {
        e.preventDefault();
        $(this).next().slideUp(300);

        if($(this).next().css('display') == 'block') {
            $(this).next().slideUp(300);
        } else {
            $(this).next().slideDown(300);
        }
    });

// section3 brewery-contents 연결
    $('.brewery_item li').click(function(e) {
        e.preventDefault();
        var index = $(this).index();
        console.log(index);
        $('.brewery_content > div').css("display", "none");
        $('.brewery_content > div').eq(index).css("display", "block");
    });

});

// side bar
$(function () {
    const logoMenu = $(".footer").offset().top;

    console.log(logoMenu);

    $(window).on("scroll", function (e) {
    	console.log($(document).scrollTop());

    	if ($(document).scrollTop() > 2200) {
        	$(".menu .gnb li a").css("color", "white");
        	$(".logo h1 img").attr("src", "../../../images/logo/main_white_logo.png");
      	} else {
        	$(".menu .gnb li a").css("color", "black");
        	$(".logo h1 img").attr("src", "../../../images/logo/detail_black_logo.png");
      	}
    	});
});