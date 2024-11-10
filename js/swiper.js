const swiper = new Swiper(".swiper", {

  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".arror_rigth_top",
    prevEl: ".arror_left_top",
  },
  allowTouchMove: true,
  grabCursor: true,
  loop: false, 
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 2, 
      speed: 150,
    },
    375: {
        slidesPerView: 2, 
        speed: 140,
        spaceBetween: 4.267,
    },
    320: {
        slidesPerView: 2, 
        speed: 140,
        spaceBetween: 4.267,
    },
  },
});
