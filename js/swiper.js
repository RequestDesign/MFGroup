// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 4, // Значение по умолчанию
        spaceBetween: 15, // Пробел между слайдами по умолчанию
        loop: false, // Убедитесь, что здесь false
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // Делаем пагинацию кликабельной
        },
        navigation: {
            nextEl: ".arror_rigth_top",
            prevEl: ".arror_left_top",
        },
        allowTouchMove: true,
        grabCursor: true,
        slidesPerGroup: 1, // Значение по умолчанию
        breakpoints: {
            1920: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2, // Увеличиваем количество слайдов
                slidesPerGroup: 1, // Прокручиваем 2 слайда за раз
                spaceBetween: 10, // Увеличиваем пробел
            },
            425: {
                slidesPerView: 2, // Увеличиваем количество слайдов
                slidesPerGroup: 1, // Прокручиваем 2 слайда за раз
                spaceBetween: 5, // Увеличиваем пробел
            },
            320: {
                slidesPerView: 2, // Увеличиваем количество слайдов
                slidesPerGroup: 1, // Прокручиваем 1 слайд за раз
                spaceBetween: 5, // Увеличиваем пробел
            },
        },
    });

    // Функция для обновления состояния навигации
    function updateNavigation() {
        const totalSlides = swiper.slides.length;
        const slidesPerView = swiper.params.slidesPerView;

        if (totalSlides <= slidesPerView) {
            swiper.navigation.disable();
        } else {
            swiper.navigation.enable();
        }
    }

    // Вызываем функцию при инициализации
    updateNavigation();

    // Также можно вызывать при изменении размера окна
    window.addEventListener('resize', updateNavigation);
});
