var swiper = new Swiper(".mySwiper1", {
  slidesPerView: "auto",
  spaceBetween: 50,
  slidesOffsetAfter: 380,
  navigation: {
    nextEl: "#nextBtn",
    prevEl: "#prevBtn",
  },
  grabCursor: true,
  breakpoints: {
    1025: {
      slidesPerView: "auto",
      spaceBetween: 50,
      slidesOffsetAfter: 380,
    },
    0: {
      spaceBetween: 30,
      slidesOffsetAfter: 0,
    },
  },
});
