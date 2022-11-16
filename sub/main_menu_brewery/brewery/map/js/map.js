$(function () {
  const windowWidth = window.matchMedia("screen and (min-width: 1024px)");

  if (windowWidth.matches) {
    $(".cont .beforeClick").on("click", function (e) {
      $(this).hide();
      $(this).next().show();
    });

    $(".cont .afterClick").on("click", function (e) {
      $(this).hide();
      $(this).prev().show();
    });
  } else {
    return;
  }

  const logoMenu = $(".footer").offset().top;

  console.log(logoMenu);

  $(window).on("scroll", function (e) {
    console.log($(document).scrollTop());

    if ($(document).scrollTop() > 1800) {
      $(".menu .gnb li a").css("color", "white");
      $(".logo h1 img").attr("src", "../../../../images/logo/main_white_logo.png");
    } else {
      $(".menu .gnb li a").css("color", "black");
      $(".logo h1 img").attr("src", "../../../../images/logo/detail_black_logo.png");
    }
  });
});

// $(window)
//   .resize(function () {
//     console.log(window.innerWidth);
//     if (window.innerWidth > 1024) {
//       // 다바이스 크기가 480이상일때

//       $(".cont .beforeClick").on("click", function (e) {
//         $(this).hide();
//         $(this).next().show();
//       });

//       $(".cont .afterClick").on("click", function (e) {
//         $(this).hide();
//         $(this).prev().show();
//       });
//     } else {
//       $(".cont .beforeClick").on("click", function (e) {
//         e.preventDefault();
//       });

//       $(".cont .afterClick").on("click", function (e) {
//         e.preventDefault();
//       });
//     }
//   })
//   .resize();
