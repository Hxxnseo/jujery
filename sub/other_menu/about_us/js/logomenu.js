$(function () {
 

  $(".beforeMenu").on("click", function () {
    $(".mobile-img").attr("src", "./img/mobile_detail_white_logo.png")
    $(".wrapper1").slideDown();
    $(".beforeMenu").hide();
    $(".afterMenu").show();
  });

  $(".afterMenu").on("click", function () {
    $(".mobile-img").attr("src", "./img/mobile_detail_white_logo2.png")
    $(".wrapper1").slideUp();
    $(".afterMenu").hide();
    $(".beforeMenu").show();
  });
});
