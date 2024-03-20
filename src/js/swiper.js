import Swiper from "swiper/bundle";

const headerSlider = new Swiper(".swiper-header", {
  init: false,
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 8,
  freeMode: true,
  autoplay: {
    delay: 3000,
  },
});

headerSlider.init();
