// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 4, 
        spaceBetween: 15,
        loop: false, 
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
        slidesPerGroup: 1, 
        breakpoints: {
            1920: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 15,
            },
            1440: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2, 
                slidesPerGroup: 1,
                spaceBetween: 10, 
            },
            425: {
                slidesPerView: 2, 
                slidesPerGroup: 1, 
                spaceBetween: 5, 
            },
            320: {
                slidesPerView: 2,
                slidesPerGroup: 1, 
                spaceBetween: 5, 
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

    window.addEventListener('resize', updateNavigation);
});
