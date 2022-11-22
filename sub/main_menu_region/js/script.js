var swiperOptions = {
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  speed: 4000,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
};

var swiper = new Swiper(".swiper-container", swiperOptions);
