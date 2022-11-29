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
    var slider = $('.brewery_item');
    slider.slick({
        autoplay: true,
        autoplaySpeed:2000,
        dots: false,
        variableWidth : true,
        draggable: true,
        pauseOnHover:true,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint:390,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint:768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $(document).ready(function() {
        var $slider = $('.multiple-items');
        var $progressBar = $('.swiper_scrollbar');
        var $progressBarLabel = $('.slider_label');
        
        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
            var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
            
            $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );
            
            $progressBarLabel.text( calc + '% completed' );
        });
        
        $slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 400,
            responsive: [
            {
                breakpoint:768,
                settings: {
                slidesToShow: 3
                }
            },
            {
                breakpoint:390,
                settings: {
                slidesToShow: 1
                }
            }
            ]
        });
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
    $('.brewery_item .b_item').click(function(e) {
        e.preventDefault();
        var index = $(this).index();
        console.log(index);
        $('.brewery_content > div').css("display", "none");
        $('.brewery_content > div').eq(index).css("display", "block");
    });

});


// mobile menu_bar
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

// side bar
$(function () {
    const logoMenu = $(".footer").offset().top;

    console.log(logoMenu);

    $(window).on("scroll", function (e) {
    	console.log($(document).scrollTop());

    	if ($(document).scrollTop() > 2300) {
        	$(".menu .gnb li a").css("color", "white");
        	$(".logo h1 img").attr("src", "../../../images/logo/main_white_logo.png");
      	} else {
        	$(".menu .gnb li a").css("color", "black");
        	$(".logo h1 img").attr("src", "../../../images/logo/detail_black_logo.png");
      	}
    	});
});