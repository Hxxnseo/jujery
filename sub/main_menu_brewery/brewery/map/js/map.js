$(function () {
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

  $(".cont .beforeClick").on("click", function (e) {
    $(this).hide();
    $(this).next().show();
  });
  $(".cont .afterClick").on("click", function (e) {
    $(this).hide();
    $(this).prev().show();
  });

  $(window).on("scroll", function (e) {
    if ($(document).scrollTop() > 1500) {
      $(".menu .gnb li a").css("color", "white");
      $(".logo h1 img").attr("src", "../../../../images/logo/main_white_logo.png");
    } else {
      $(".menu .gnb li a").css("color", "black");
      $(".logo h1 img").attr("src", "../../../../images/logo/detail_black_logo.png");
    }
  });
});

let stateType = true;
$(window).resize(() => {
  let ww = window.innerWidth;

  if (ww > 1024 && stateType) {
    stateType = false;

    let www = window.innerWidth;
    if (www > 1024) {
    }
  } else if (ww < 1024 && !stateType) {
    stateType = true;

    return;
  }
});
