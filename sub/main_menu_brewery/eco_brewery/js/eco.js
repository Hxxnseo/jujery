$(function () {
  $(window).on("scroll", function (e) {
    if ($(document).scrollTop() > 700) {
      $(".menu .gnb li a").css("color", "white");
      $(".logo h1 img").attr("src", "../../../images/logo/main_white_logo.png");
    } else {
      $(".menu .gnb li a").css("color", "black");
      $(".logo h1 img").attr("src", "../../../images/logo/detail_black_logo.png");
    }
  });

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
