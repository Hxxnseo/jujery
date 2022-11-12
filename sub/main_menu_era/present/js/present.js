$(function() {
    $(window).on('resize',function() {
        var WinW = $(window).width();
        if (WinW > 1024) { // pc
            $('.recommands').children(".recommand").css({});
            
            $('.desc')
            .mouseover(function() {
            
            })
            .mouseout(function() {
            
            });
        } else if(WinW < 1024) { // mobile
            $('.desc').off('mouseover');
            $('.desc').off('mouseout');

        }
    });

    
})