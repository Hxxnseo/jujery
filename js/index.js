// window.onload = function () {
//   const elm = document.querySelectorAll(".section");
//   const elmCount = elm.length;
//   elm.forEach(function (item, index) {
//     item.addEventListener("mousewheel", function (event) {
//       event.preventDefault();
//       let delta = 0;

//       if (!event) event = window.event;
//       if (event.wheelDelta) {
//         delta = event.wheelDelta / 120;
//         if (window.opera) delta = -delta;
//       } else if (event.detail) delta = -event.detail / 3;

//       let moveTop = window.scrollY;
//       let elmSelector = elm[index];

//       // wheel down : move to next section
//       if (delta < 0) {
//         if (elmSelector !== elmCount - 1) {
//           try {
//             moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
//           } catch (e) {}
//         }
//       }

//       // wheel up : move to previous section
//       else {
//         if (elmSelector !== 0) {
//           try {
//             moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
//           } catch (e) {}
//         }
//       }

//       const body = document.querySelector("html");
//       window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
//     });
//   });
// };

// $("#box").each(function () {
//   // 개별적으로 Wheel 이벤트 적용 mousewheel(IE/chrome/opera) DOMMouseScroll(FF)
//   $(this).on("mousewheel DOMMouseScroll", function (e) {
//     e.preventDefault();
//     var delta = 0;
//     /* IE */
//     if (!event) event = window.event;
//     //휠에 대한 정보 얻기 파이어폭스 외 IE/Chrome/Opera = wheelDelta
//     if (event.wheelDelta) {
//       delta = event.wheelDelta / 50;
//       //평균 50~120 사이로 요소의 인식높이에 따라 다름(한 화면(height100%)기준일떄는 120
//       if (window.opera) delta = -delta;
//       //휠에 대한 정보 얻기 Mozilla FF = detail
//     } else if (event.detail) delta = -event.detail / 3;
//     var moveTop = null;
//     // 마우스휠을 위에서 아래로
//     if (delta < 0) {
//       if ($(this).next() != undefined) {
//         moveTop = $(this).next().offset().top;
//       }
//       // 마우스휠을 아래에서 위로
//     } else {
//       if ($(this).prev() != undefined) {
//         moveTop = $(this).prev().offset().top;
//       }
//     }
//     // 화면 이동 0.8초(800)
//     $("html,body")
//       .stop()
//       .animate(
//         {
//           scrollTop: moveTop + "px",
//         },
//         {
//           duration: 300,
//           complete: function () {},
//         }
//       );
//   });
// });

window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

var $html = $("html");
var page = 1;
var lastPage = $("#box").length;

$(window).on("wheel", function (e) {
  // $(function () {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({ scrollTop: posTop });

  if (page === 4) {
    console.log(123123);
    $(".cont1").show(2000);
    $(".cont2").show(3000);
    $(".cont3").show(5000);
    $(".cont4").show(4000);
    $(".cont5").show(1000);
    $(".cont6").show(4000);
    $(".cont7").delay(2000).show(5000);
  }
  // });
});

$html.animate({ scrollTop: 0 }, 10);
