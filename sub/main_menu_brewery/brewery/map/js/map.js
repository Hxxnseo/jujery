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
