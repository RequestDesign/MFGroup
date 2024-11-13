var swiper = new Swiper(".mySwiper6", {
    slidesPerView: 'auto',
    spaceBetween: 17.8,
    centeredSlides: true,
    loop: true,
    initialSlide: 2,
    navigation: {
        nextEl: "#award-rigth_next",
        prevEl: "#award-left_prev",
    },
    breakpoints: {
        769: {
            slidesPerView: 'auto',
            spaceBetween: 17.8,
        },
        0: {
            slidesPerView: "auto",
            spaceBetween: 10,
        },
    },
    grabCursor: true,
    on: {
        slideChange: function () {
            // Удаляем класс active-image_awards у всех слайдов
            this.slides.forEach(slide => {
                slide.classList.remove('active-image_awards');
            });
            // Добавляем класс active-image_awards к активному слайду
            const activeSlide = this.slides[this.activeIndex];
            activeSlide.classList.add('active-image_awards');
        },
    },
});

// Добавляем класс active-image_awards к слайду при инициализации
swiper.slides[swiper.activeIndex].classList.add('active-image_awards');



