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
});

// 좋아요 버튼
$(function() {
    $('.heart').on("click", function() {
        $(this).next()
        .css("display","block");
    });
    $('.heart_full').on("click", function() {
        $(this)
        .css("display","none");
    });
});

// slick slider
$(document).ready(function() {
    var $slider = $('.recommend');
    var $progressBar = $('.swiper_scrollbar');
    var $progressBarLable = $('.slider_label')

    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var calc = ( (nextSlide) / (slick.slideCount-1)) * 100;

        $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc);

        $progressBarLable.text(calc + '% completed');
    });

    $slider.slick({
        slidesToShow:3,
        slidesToScroll:1,
        speed:400
    });
});

// section3 아코디언탭 on mobile
$(function() {
    $('.brewery_content .brewery_box .text a').click(function(e) {
        e.preventDefault();
        $(this).next().slideUp(300);

        if($(this).next().css('display') == 'block') {
            $(this).next().slideUp(300);
        } else {
            $(this).next().slideDown(300);
        }
    });
});

// section3 brewery-contents 연결
$(function() {
    $('.brewery_item li').click(function(e) {
        e.preventDefault();
        var index = $(this).index();
        console.log(index);
        $('.brewery_content > div').css("display", "none");
        $('.brewery_content > div').eq(index).css("display", "block");
    });
});