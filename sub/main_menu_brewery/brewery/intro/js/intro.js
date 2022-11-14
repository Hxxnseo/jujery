$(function () {
  $(".imgSlides").bxSlider({
    auto: true, // 슬라이드 자동 전환
    stopAutoOnClick: true, // stop버튼 누르면 정지
    pager: false, // 블릿 버튼 노출
    speed: 300,
    controls: false,
    autoHover: true,
  });
});
