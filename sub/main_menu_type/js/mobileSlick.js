var init = {
    autoplay: true,
    infinite: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1 };


    $(function () {
    var win = $(window);
    var slider = $(".brewery_pic");

    win.on("load resize", function () {
        if (win.width() < 768) {
        slider.not(".slick-initialized").slick(init);
    } else if (slider.hasClass("slick-initialized")) {
        slider.slick("unslick");
    }
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
});