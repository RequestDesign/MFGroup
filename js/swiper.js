document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper3", {
    slidesPerView: "auto",
    spaceBetween: 17,
    slidesPerGroup: 1,
    loop: false,
    slidesOffsetAfter: 27,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".arror_rigth_top",
      prevEl: ".arror_left_top",
    },
    allowTouchMove: true,
    grabCursor: true,

    breakpoints: {
      // Для экранов больше 768px (48em)
      769: {
        slidesPerView: "auto",
        spaceBetween: 50,
        slidesOffsetAfter: 190,
      },
      // Для экранов меньше 768px (48em)
      768:{
        slidesPerView: "auto", 
        spaceBetween: 32, 
        slidesOffsetAfter: 57,
      },
      425: {
        slidesPerView: "auto", 
        spaceBetween: 20, 
        slidesOffsetAfter: 30,
      },
    },
  });

  function updateNavigation() {
    const totalSlides = swiper.slides.length;
    const slidesPerView = swiper.params.slidesPerView;

    if (totalSlides <= slidesPerView) {
      swiper.navigation.disable();
    } else {
      swiper.navigation.enable();
    }
  }

  updateNavigation();

  window.addEventListener("resize", updateNavigation);
});
