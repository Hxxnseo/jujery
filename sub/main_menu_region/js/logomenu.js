$(function () {
  const logoMenu = $("footer").offset().top;

  console.log(logoMenu);

  $(window).on("scroll", function (e) {
    console.log($(document).scrollTop());

    if ($(document).scrollTop() > 2800) {
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

$(document).ready(function () {
  $(".slider").bxSlider();
  $(".bx-controls-direction").children().empty();
});


$(function () {
  console.log(2);
  $(".acordian-menu > li > a").click(function () {
    const bc = $(this).data("bg");

    console.log(bc);

    $("a").removeClass();
    $(".contents").slideUp(300);

    if ($(this).next().css("display") === "block") {
      $(this).removeClass().next().slideUp(300);
    } else {
      $(this).addClass(bc).next().slideDown(300);
    }
  });
});

