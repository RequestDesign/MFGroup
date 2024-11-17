var swiper = new Swiper(".mySwiper8", {
    direction: "vertical", 
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#catalog-btn_next",
        prevEl: "#catalog-btn_prev",
    },
    breakpoints: {
        769: { 
            direction: "vertical", 
            slidesPerView: 1,
            spaceBetween: 30,
        },
        0: { 
            direction: "horizontal", 
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
});

function updateCounter() {
    const currentIndex = swiper.realIndex + 1; 
    const totalSlides = swiper.slides.length; 

    console.log(`Current Index: ${currentIndex}, Total Slides: ${totalSlides}`);

    const counterElement = document.querySelector('.advantages-botton_numder');
    if (counterElement) {
        counterElement.innerHTML = `${String(currentIndex).padStart(2, '0')}<span class="numder-small">/${String(totalSlides).padStart(2, '0')}</span>`;
    }

}

window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) { 
        swiper.changeDirection('horizontal'); 
    } else {
        swiper.changeDirection('vertical'); 
    }
    updateCounter(); 
});

if (window.innerWidth <= 768) { 
    swiper.changeDirection('horizontal'); 
} else {
    swiper.changeDirection('vertical'); 
}

updateCounter();

swiper.on('slideChange', function () {
    updateCounter();
});
