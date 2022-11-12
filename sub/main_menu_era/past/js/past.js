$(function() {
    $(window).on('resize',function() {
        var WinW = $(window).width();
        if (WinW > 1024) {
            $('.desc').children(".dis-text").css({'display':'none'});
            
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
            $('.desc').off('mouseover');
            $('.desc').off('mouseout');
            $('.desc').children(".dis-text").css({'display':'block'});
            $('.dis').children('img').css('margin-top');
        }
    });

    
})