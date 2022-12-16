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

  $(window).on("scroll", function (e) {
    if ($(document).scrollTop() > 2100) {
      $(".menu .gnb li a").css("color", "white");
      $(".logo h1 img").attr("src", "../../../images/logo/main_white_logo.png");
    } else {
      $(".menu .gnb li a").css("color", "black");
      $(".logo h1 img").attr("src", "../../../images/logo/detail_black_logo.png");
    }
  });

  var WinW = $(window).width();
  if (WinW > 1024) {
    // pc
    $(".recommands").children(".recommand").css({ opacity: 1, cursor: "pointer" });
    $(".target").css({ opacity: "0" });

    $(".recommands")
      .children(".recommand")
      .on({
        mouseover: function () {
          $(this).children(".recommand-text").children(".target").css({
            opacity: 1,
          }),
            $(this).children(".pcnew").css({
              filter: "brightness(50%)",
            });
        },
        mouseout: function () {
          $(this).children(".recommand-text").children(".target").css({
            opacity: 0,
          }),
            $(this).children(".pcnew").css({
              filter: "brightness(100%)",
            });
        },
      });

    $(".box").children(".arrow-black").css({ display: "none" });
    $(".box").on({
      mouseover: function () {
        $(this).children(".arrow-black").css({ display: "block" });
      },
      mouseout: function () {
        $(this).children(".arrow-black").css({ display: "none" });
      },
    });

    $(".black1").on("click", function () {
      $(this)
        .next()
        .next()
        .stop()
        .animate(
          {
            "margin-left": "-586px",
          },
          2000,
          function () {
            $(".black1").stop();
          }
        );
    });

    $(".black2").on("click", function () {
      $(this)
        .next()
        .next()
        .stop()
        .animate(
          {
            "margin-left": "-326px",
          },
          2000,
          function () {
            $(".black2").stop();
          }
        );
    });

    $(".black3").on("click", function () {
      $(this)
        .next()
        .next()
        .stop()
        .animate(
          {
            "margin-left": "-505px",
          },
          2000,
          function () {
            $(".black3").stop();
          }
        );
    });

    $(".black4").on("click", function () {
      $(this)
        .next()
        .next()
        .stop()
        .animate(
          {
            "margin-left": "-326px",
          },
          2000,
          function () {
            $(".black4").stop();
          }
        );
    });

    $(".black5").on("click", function () {
      $(this)
        .next()
        .next()
        .stop()
        .animate(
          {
            "margin-left": "-260px",
          },
          2000,
          function () {
            $(".black5").stop();
          }
        );
    });

    $(".arrow-white").on("click", function () {
      $(this).parent().stop().animate(
        {
          "margin-left": "0px",
        },
        2000
      );
    });
  } else if (WinW < 1024) {
    // mobile
    $(".mobile").children().css({ cursor: "pointer" });
    $(".recommands").children(".recommand").css({ opacity: 0 });
    $(".target").css({ opacity: "1" });
    $(window).on("scroll", function () {
      var sc_top = $(this).scrollTop();
      console.log(sc_top);
      if ($(this).scrollTop() > 150) {
        $(".recommands").children(".r1").animate(
          {
            opacity: 1,
          },
          800
        );
      }
      if ($(this).scrollTop() > 400) {
        $(".recommands").children(".r2").animate(
          {
            opacity: 1,
          },
          800
        );
      }
      if ($(this).scrollTop() > 650) {
        $(".recommands").children(".r3").animate(
          {
            opacity: 1,
          },
          800
        );
      }
      if ($(this).scrollTop() > 900) {
        $(".recommands").children(".r4").animate(
          {
            opacity: 1,
          },
          800
        );
      }
    });
    $(".recommands").children(".recommand").off("mouseover");
    $(".recommands").children(".recommand").off("mouseout");

    $(".m1").on({
      click: function () {
        $(".modal").fadeIn();
        $(".modal-text").html("<h5>천비향</h5><br>총 다섯번의 담금 과정을 거치는 오양주인 천비향은 쌀 본연의 단맛이 묵직하게 느껴지는 술이에요. 진한 풍미지만 부드러워요. 시원하게 드시는 걸 추천드려요!<br>");
      },
    });

    $(".m2").on({
      click: function () {
        $(".modal").fadeIn();
        $(".modal-text").html("<h5>도원결의</h5><br>영덕의 해풍 맞은 복숭아를 첨가하여 천연 발효기법으로 만든 도원결의는 자연스럽고 은은한 복숭아의 맛과 향이 매력적인 술이에요. 시원하게 보관하여 스트레이트로 드셔보세요!");
      },
    });

    $(".m3").on({
      click: function () {
        $(".modal").fadeIn();
        $(".modal-text").html("<h5>장수 오미자주</h5><br>활성탄을 통과시켜 두 번의 여과 과정을 거진 장수 오미자주는 산뜻한 달콤함이 매력이에요. 쓴 맛과 떫은 맛이 지나가며 다양한 풍미가 즐거운 술이랍니다!<br>");
      },
    });

    $(".m4").on({
      click: function () {
        $(".modal").fadeIn();
        $(".modal-text").html("<h5>원소주</h5><br>감압증류 기법을 사용한 원소주는 쌀 본연의 향이 퍼지며 알코올 특유의 쓴맛이 덜하고 깔끔한 뒷맛이 매력적인 술입니다. 레몬 등을 곁들여 칵테일로 즐겨 보세요!");
      },
    });

    $(".m5").on({
      click: function () {
        $(".modal").fadeIn();
        $(".modal-text").html("<h5>토끼소주</h5><br>뉴욕에서 시작된 술이지만 한국의 전통기술로 만드는 엄연한 증류식 소주인 토끼소주는 입 안에서 풍부한 감촉을 자랑하고 목넘김이 깔끔해요. 온더락으로 마시는 걸 추천해요!");
      },
    });

    $(".m6").on({
      click: function () {
        $(".modal").fadeIn();
        $(".modal-text").html("<h5>택이</h5><br>세 번 발효시키는 삼양주 기법으로 만들어진 택이는 달지 않고 적절한 산미가 입맛을 돋우는 술이에요. 은은한 풍미와 깔끔한 뒷맛으로 시원하게 보관하여 얼음 없이 즐겨보세요!");
      },
    });

    $(".m7").on({
      click: function () {
        $(".modal").fadeIn();
        $(".modal-text").html("<h5>구기홍주</h5><br>석간수와 청양 햅쌀을 이용한 구기홍주는 달콤함과 씁쓸함이 어우러져 쌉싸름한 끝맛이 특징이에요. 은은한 풍미를 즐기기 위해 스트레이트로 즐기는 걸 추천드려요!");
      },
    });

    $(".m8").on({
      click: function () {
        $(".modal").fadeIn();
        $(".modal-text").html("<h5>진맥</h5><br>진맥소주는 독특하게도 밀로 만든 소주입니다! 고소한 빵과 상큼한 풋사과가 떠오르는 향이에요. 특유의 깊고 풍성한 향을 위해 상온 보관 후 마시는 걸 추천드려요<br>");
      },
    });

    $(".m9").on({
      click: function () {
        $(".modal").fadeIn();
        $(".modal-text").html("<h5>붉은 원숭이</h5><br>홍국균을 자연 발효시켜 만든 특별한 쌀로 만들어 붉은 빛을 내는 붉은 원숭이는 부드럽고 옅은 단맛이 매력적인 술로 도수에 비해 바디감이 높지 않아 안주 없이도 즐길 수 있어요!");
      },
    });

    $(".modal_content").click(function () {
      $(".modal").fadeOut();
    });
  } // mobile

  $(window).resize(function () {
    var WinW = $(window).width();
    if (WinW > 1024) {
      // pc
      $(".recommands").children(".recommand").css({ opacity: 1, cursor: "pointer" });
      $(".target").css({ opacity: "0" });

      $(".recommands")
        .children(".recommand")
        .on({
          mouseover: function () {
            $(this).children(".recommand-text").children(".target").css({
              opacity: 1,
            }),
              $(this).children(".pcnew").css({
                filter: "brightness(50%)",
              });
          },
          mouseout: function () {
            $(this).children(".recommand-text").children(".target").css({
              opacity: 0,
            }),
              $(this).children(".pcnew").css({
                filter: "brightness(100%)",
              });
          },
        });

      $(".box").children(".arrow-black").css({ display: "none" });
      $(".box").on({
        mouseover: function () {
          $(this).children(".arrow-black").css({ display: "block" });
        },
        mouseout: function () {
          $(this).children(".arrow-black").css({ display: "none" });
        },
      });

      $(".black1").on("click", function () {
        $(this)
          .next()
          .next()
          .stop()
          .animate(
            {
              "margin-left": "-586px",
            },
            2000,
            function () {
              $(".black1").stop();
            }
          );
      });

      $(".black2").on("click", function () {
        $(this)
          .next()
          .next()
          .stop()
          .animate(
            {
              "margin-left": "-326px",
            },
            2000,
            function () {
              $(".black2").stop();
            }
          );
      });

      $(".black3").on("click", function () {
        $(this)
          .next()
          .next()
          .stop()
          .animate(
            {
              "margin-left": "-505px",
            },
            2000,
            function () {
              $(".black3").stop();
            }
          );
      });

      $(".black4").on("click", function () {
        $(this)
          .next()
          .next()
          .stop()
          .animate(
            {
              "margin-left": "-326px",
            },
            2000,
            function () {
              $(".black4").stop();
            }
          );
      });

      $(".black5").on("click", function () {
        $(this)
          .next()
          .next()
          .stop()
          .animate(
            {
              "margin-left": "-260px",
            },
            2000,
            function () {
              $(".black5").stop();
            }
          );
      });

      $(".arrow-white").on("click", function () {
        $(this).parent().stop().animate(
          {
            "margin-left": "0px",
          },
          2000
        );
      });
    } else if (WinW < 1024) {
      // mobile
      $(".mobile").children().css({ cursor: "pointer" });
      $(".recommands").children(".recommand").css({ opacity: 0 });
      $(".target").css({ opacity: "1" });
      $(window).on("scroll", function () {
        var sc_top = $(this).scrollTop();
        console.log(sc_top);
        if ($(this).scrollTop() > 150) {
          $(".recommands").children(".r1").animate(
            {
              opacity: 1,
            },
            800
          );
        }
        if ($(this).scrollTop() > 400) {
          $(".recommands").children(".r2").animate(
            {
              opacity: 1,
            },
            800
          );
        }
        if ($(this).scrollTop() > 650) {
          $(".recommands").children(".r3").animate(
            {
              opacity: 1,
            },
            800
          );
        }
        if ($(this).scrollTop() > 900) {
          $(".recommands").children(".r4").animate(
            {
              opacity: 1,
            },
            800
          );
        }
      });
      $(".recommands").children(".recommand").off("mouseover");
      $(".recommands").children(".recommand").off("mouseout");

      $(".m1").on({
        click: function () {
          $(".modal").fadeIn();
          $(".modal-text").html("<h5>천비향</h5><br>총 다섯번의 담금 과정을 거치는 오양주인 천비향은 쌀 본연의 단맛이 묵직하게 느껴지는 술이에요. 진한 풍미지만 부드러워요. 시원하게 드시는 걸 추천드려요!");
        },
      });

      $(".m2").on({
        click: function () {
          $(".modal").fadeIn();
          $(".modal-text").html("<h5>도원결의</h5><br>영덕의 해풍 맞은 복숭아를 첨가하여 천연 발효기법으로 만든 도원결의는 자연스럽고 은은한 복숭아의 맛과 향이 매력적인 술이에요. 시원하게 보관하여 스트레이트로 드셔보세요!");
        },
      });

      $(".m3").on({
        click: function () {
          $(".modal").fadeIn();
          $(".modal-text").html("<h5>장수 오미자주</h5><br>활성탄을 통과시켜 두 번의 여과 과정을 거진 장수 오미자주는 산뜻한 달콤함이 매력이에요. 쓴 맛과 떫은 맛이 지나가며 다양한 풍미가 즐거운 술이랍니다!");
        },
      });

      $(".m4").on({
        click: function () {
          $(".modal").fadeIn();
          $(".modal-text").html("<h5>원소주</h5><br>감압증류 기법을 사용한 원소주는 쌀 본연의 향이 퍼지며 알코올 특유의 쓴맛이 덜하고 깔끔한 뒷맛이 매력적인 술입니다. 레몬 등을 곁들여 칵테일로 즐겨 보세요!");
        },
      });

      $(".m5").on({
        click: function () {
          $(".modal").fadeIn();
          $(".modal-text").html("<h5>토끼소주</h5><br>뉴욕에서 시작된 술이지만 한국의 전통기술로 만드는 엄연한 증류식 소주인 토끼소주는 입 안에서 풍부한 감촉을 자랑하고 목넘김이 깔끔해요. 온더락으로 마시는 걸 추천해요!");
        },
      });

      $(".m6").on({
        click: function () {
          $(".modal").fadeIn();
          $(".modal-text").html("<h5>택이</h5><br>세 번 발효시키는 삼양주 기법으로 만들어진 택이는 달지 않고 적절한 산미가 입맛을 돋우는 술이에요. 은은한 풍미와 깔끔한 뒷맛으로 시원하게 보관하여 얼음 없이 즐겨보세요!");
        },
      });

      $(".m7").on({
        click: function () {
          $(".modal").fadeIn();
          $(".modal-text").html("<h5>구기홍주</h5><br>석간수와 청양 햅쌀을 이용한 구기홍주는 달콤함과 씁쓸함이 어우러져 쌉싸름한 끝맛이 특징이에요. 은은한 풍미를 즐기기 위해 스트레이트로 즐기는 걸 추천드려요!");
        },
      });

      $(".m8").on({
        click: function () {
          $(".modal").fadeIn();
          $(".modal-text").html("<h5>진맥</h5><br>진맥소주는 독특하게도 밀로 만든 소주입니다! 고소한 빵과 상큼한 풋사과가 떠오르는 향이에요. 특유의 깊고 풍성한 향을 위해 상온 보관 후 마시는 걸 추천드려요");
        },
      });

      $(".m9").on({
        click: function () {
          $(".modal").fadeIn();
          $(".modal-text").html("<h5>붉은 원숭이</h5><br>홍국균을 자연 발효시켜 만든 특별한 쌀로 만들어 붉은 빛을 내는 붉은 원숭이는 부드럽고 옅은 단맛이 매력적인 술로 도수에 비해 바디감이 높지 않아 안주 없이도 즐길 수 있어요!");
        },
      });

      $(".modal_content").click(function () {
        $(".modal").fadeOut();
      });
    } // mobile
  });
});
