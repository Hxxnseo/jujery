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
        .css("display","none")
    });
});

// 좋아요 버튼
$(function() {
    $('.heart').on("click", function() {
        $(this).next()
        .css("display","block")
    });
    $('.heart_full').on("click", function() {
        $(this)
        .css("display","none")
    });
})

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
    })
});

// section3 brewery-contents 연결
$(function() {
    $('li:first-of-type').click(function(e) {
        e.preventDefault();
        if(('#b1').css('display') == 'block') {

        }
    })

    
})

