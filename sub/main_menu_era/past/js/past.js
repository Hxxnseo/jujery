$(function() {
    $(window).on('resize',function() {
        var WinW = $(window).width();
        if (WinW > 1024) {
            $('.desc').children(".dis-text").css({'display':'none'});
            $('.dis').children('img').css('margin-top','-400px');
            $('.dis').children('img.ja').css({'margin-top': '-420px'});
            $('.dis').children('img.back').css({'margin-top': '-420px'});
            $('.pro').children('img').css('margin-top','-400px');

            $('.desc')
            .mouseover(function() {
            $(this).children(".dis-text").css({'display':'block'});
            $(this).children(".title").toggleClass('show');
            $(this).next().css({
                'position' : 'absolute',
                'margin-top': '-620px',
                'z-index' : '3'
                });
            })
            .mouseout(function() {
            $(this).children(".dis-text").css({'display':'none'});
            $(this).children(".title").toggleClass('show');
            $(this).next().css({
                'position' : 'absolute',
                'margin-top': '-400px',
                'z-index' : '1'
                });
            });
        } else if(WinW < 1024) {
            $(window).on("scroll", function() {
                var sc_top = $(this).scrollTop();
                console.log(sc_top);
                if($(this).scrollTop() > 600){
                    $('.dis').animate({
                        opacity: 1
                    },700);
                }

                if($(this).scrollTop() > 2700){
                    $('.pro').animate({
                        opacity: 1
                    },700);
                }
            });
            $('.desc').off('mouseover');
            $('.desc').off('mouseout');
            $('.desc').children(".dis-text").css({'display':'block'});
            $('.dis').css('opacity', 0);
            $('.pro').css('opacity', 0);
            $('.dis').children('img').css('margin-top','20px');
            $('.pro').children('img').css('margin-top','50px');
        }
    });

    
})