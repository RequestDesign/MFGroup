var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 7,
    spaceBetween: 17.8,
    centeredSlides: true, 
    loop: true,
    initialSlide: 5,
    navigation: {
        nextEl: "#btn-arror_next",
        prevEl: "#btn-arror_prev",
    },
    breakpoints: {
        769: {
          slidesPerView: 7,
          spaceBetween: 17.8,
        },
        0:{
          slidesPerView: "auto", 
          spaceBetween: 12, 
        },
    },
    grabCursor: true,
    on: {
        slideChange: function () {
            this.slides.forEach(slide => {
                slide.querySelector('.image-awards').classList.remove('active-image_awards');
            });
            const activeSlide = this.slides[this.activeIndex].querySelector('.image-awards');
            activeSlide.classList.add('active-image_awards');
        },
    },
});




