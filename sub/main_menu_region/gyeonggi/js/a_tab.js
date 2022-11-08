$(function () {
  $(".acordian-menu > li > a").click(function () {
    const bc = $(this).data("bg"); // red, this는 현재 클릭한 a
    // console.log(bc);
    $("a").removeClass(); // 전체 a에 적용된 클래스 해제
    $("p").slideUp(300); // 전체 p를 보이지 않게

    if ($(this).next().css("display") == "block") {
      // 클릭한 a의 p가 보이면,
      $(this).removeClass().next().slideUp(300); // 클래스 해제, p숨기기
    } else {
      $(this).addClass(bc).next().slideDown(300); // 클래스 적용, p보이기
    }
  });
});
