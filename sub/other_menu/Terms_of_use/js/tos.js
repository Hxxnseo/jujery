window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

$html.animate({ scrollTop: 0 }, 10);

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
});

// $(".wrapper1").slideUp();
