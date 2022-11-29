$(function () {
  console.log(2);
  $(".acordian-menu > li > a").click(function () {
    const bc = $(this).data("bg");

    console.log(bc);

    $("a").removeClass();
    $(".contents").slideUp(300);

    if ($(this).next().css("display") === "block") {
      $(this).removeClass().next().slideUp(300);
    } else {
      $(this).addClass(bc).next().slideDown(300);
    }
  });
});

