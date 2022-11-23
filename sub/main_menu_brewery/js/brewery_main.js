$(function () {
  const logoMenu = $("footer").offset().top;

  console.log(logoMenu);

  $(window).on("scroll", function (e) {
    console.log($(document).scrollTop());

    if ($(document).scrollTop() > 1300) {
      $(".menu .gnb li a").css("color", "white");
      $(".logo h1 img").attr("src", "../../images/logo/main_white_logo.png");
    } else {
      $(".menu .gnb li a").css("color", "black");
      $(".logo h1 img").attr("src", "../../images/logo/detail_black_logo.png");
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
  $(window).scroll(function () {
    $(".imgP2").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1", "margin-left": "0px" }, 1000);
      }
    });
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    $(".imgP3").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1", "margin-left": "0px" }, 1000);
      }
    });
  });
});
