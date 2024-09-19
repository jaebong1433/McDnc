$(document).ready(function () {

  $(window).scroll(function () {
    let scrollT = $(this).scrollTop();
    if (scrollT > 500) {
      $("#header").addClass("fix");
      $(".go_top").addClass("fix");
    } else {
      $("#header").removeClass("fix");
      $(".go_top").removeClass("fix");
    }
  });

  //depth2
  let mainMenu = $(".gnb>li");
  $(mainMenu).mouseenter(function () {
    $(this).find(".depth2").stop().fadeIn().css({ "display": "grid" });
  });

  $(mainMenu).mouseleave(function () {
    $(this).find(".depth2").stop().fadeOut();
  });

  //search
  $(".btn_sch").click(function () {
    $(".search").fadeIn();
    $(".dim.two").fadeIn();
  });

  $(".close").click(function () {
    $(".search").fadeOut();
    $(".dim.two").fadeOut();
  });

  //login 
  $("#header .login").click(function () {
    $(".login-container").fadeIn();
    $(".three").fadeIn();
  });

  $(".login_close i").click(function () {
    $(".login-container").fadeOut();
    $(".three").fadeOut();
  });

  //전체메뉴
  $(".btn_ham").click(function () {
    $(".mgnb_wrap").fadeIn();
    $(".one").fadeIn();
  });

  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
    $(".one").fadeOut();
  });

  $(".mgnb > li").click(function () {
    var $this = $(this);
    var $mdepth2 = $this.find(".mdepth2");

    if ($this.hasClass("active")) {
      // 이미 활성화된 경우
      $mdepth2.slideUp();
      $this.removeClass("active");
    } else {
      // 활성화되지 않은 경우
      $(".bi bi-chevron-down").css({ "rotate": "0deg" });
      $this.addClass("active");
      $mdepth2.slideDown();
      $this.siblings().removeClass("active").find(".mdepth2").slideUp();
    }
  });

  //메인 배너 슬라이드
  const mb = new Swiper('.mb', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {// 슬라이드 갯수(하단 불릿기호) - 태그추가
      el: ".swiper-pagination",
      type: "bullets",// normal "bullets" "fraction"(숫자), "progressbar"
      clickable: true, // 클릭가능여부 normal = false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //사업실적 슬라이드
  const performance = new Swiper('.performance', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },


    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1080: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },
    navigation: {
      prevEl: ".biz_prev",
      nextEl: ".biz_next",
    },
  });

  //location
  $(".loca_link").click(function () {
    var $this = $(this);
    var $loca_depth2 = $this.find(".loca_depth2");

    if ($this.hasClass("active")) {
      // 이미 활성화된 경우
      $loca_depth2.slideUp();
      $this.removeClass("active");
    } else {
      // 활성화되지 않은 경우
      $(".loca_link:after").css({ "rotate": "0deg" });
      $this.addClass("active");
      $loca_depth2.slideDown();
      $this.siblings().removeClass("active").find(".loca_depth2").slideUp();
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const deleteButton = document.querySelector('.delete');
  const inputField = document.querySelector('.sch_box input');

  deleteButton.addEventListener('click', function () {
    if (inputField) {
      inputField.value = '';
    }
  });

});

