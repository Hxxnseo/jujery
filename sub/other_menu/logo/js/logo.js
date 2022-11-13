$(function() {
    $(window).on("scroll", function() {
        var sc_top = $(this).scrollTop();
        console.log(sc_top);
        
        $('section').css('opacity', '0');
        if($(this).scrollTop() > 200){
            $('.logoguide').animate({'opacity':'1'}, 1000);
        }
        if($(this).scrollTop() > 800){
            $('.button').animate({'opacity':'1'}, 1000);
        }
        if($(this).scrollTop() > 1200){
            $('.snsImg').animate({'opacity':'1'}, 1000);
        }
        if($(this).scrollTop() > 1900){
            $('.warning').animate({'opacity':'1'}, 1000);
        }
    });    

    
})