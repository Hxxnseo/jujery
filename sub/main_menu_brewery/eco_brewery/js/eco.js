$(function () {
  $(".img1").on({
    mouseenter: function () {
      $(".img1 .store").stop().show();
      $(".img1 .store").css("opacity", 0.5);
    },
    mouseleave: function () {
      $(".img1 .store").stop().hide();
    },
  });
});
