var swiper = new Swiper(".mySwiper5", {
  slidesPerView: "auto",
  spaceBetween: 12,
  loop: true,
  initialSlide: 0,
  navigation: {
    nextEl: "#reward-btn_next",
    prevEl: "#reward-btn_prev",
  },
  breakpoints: {
    769: {
      slidesPerView: "auto",
      spaceBetween: 12,
    },
    0: {
      slidesPerView: "auto",
      spaceBetween: 12,
      centeredSlides: true, 
    },
  },
  
  grabCursor: true,
});
