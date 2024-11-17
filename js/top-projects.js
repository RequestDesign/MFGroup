var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 12,
  slidesOffsetAfter: 0,
  navigation: {
    nextEl: "#nextBtn",
    prevEl: "#prevBtn",
  },
  grabCursor: true,
  breakpoints: {
    769: {
      spaceBetween: 12,
      slidesOffsetAfter: 0,
    },
    768: {
      spaceBetween: 20,
      slidesOffsetAfter: 0,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".portfolio-top_btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active-btn"));
      this.classList.add("active-btn");
    });
  });
});
