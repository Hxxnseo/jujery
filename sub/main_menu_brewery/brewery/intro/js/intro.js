$(function () {
  $(".imgSlides").bxSlider({
    auto: true, // 슬라이드 자동 전환
    stopAutoOnClick: true, // stop버튼 누르면 정지
    pager: false, // 블릿 버튼 노출
    speed: 300,
    controls: false,
    autoHover: true,
  });

  const logoMenu = $(".footer").offset().top;

  console.log(logoMenu);

  $(window).on("wheel", function (e) {
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
