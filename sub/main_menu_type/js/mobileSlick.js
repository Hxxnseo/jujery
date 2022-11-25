// var init = {
//     autoplay: true,
//     infinite: true,
//     cssEase: "linear",
//     slidesToShow: 1,
//     slidesToScroll: 1 };


//     $(function () {
//     var win = $(window);
//     var slider = $(".brewery_pic");

//     win.on("load resize", function () {
//         if (win.width() < 768) {
//         slider.slick();
//     } else if (slider.hasClass("slick-initialized")) {
//         slider.slick("unslick");
//     }
//     });
var WinW = $(window).width();
  if (WinW < 1024) {
    $('.brewery_pic').on("click", function() {
      $('.img_box')
      .animate({
        marginLeft:"+=100%"
      },1000)
    })
  }

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
// });