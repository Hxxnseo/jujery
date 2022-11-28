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

  // const windowWidth = window.matchMedia("screen and (min-width: 1024px)");

  // console.log(windowWidth.matches);
  // if (windowWidth.matches) {
  //   $(".cont .beforeClick").on("click", function (e) {
  //     $(this).hide();
  //     $(this).next().show();
  //   });

  //   $(".cont .afterClick").on("click", function (e) {
  //     $(this).hide();
  //     $(this).prev().show();
  //   });
  // } else {
  //   return;
  // }

  const logoMenu = $(".footer").offset().top;

  console.log(logoMenu);

  $(window).on("scroll", function (e) {
    console.log($(document).scrollTop());

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
    console.log("호출됨");
    stateType = false;

    let www = window.innerWidth;
    if (www > 1024) {
    }
  } else if (ww < 1024 && !stateType) {
    console.log("aaaa");
    stateType = true;

    return;
  }
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
