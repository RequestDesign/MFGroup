document.querySelector('.toggle-button').addEventListener('click', function() {
    const storyText = document.querySelector('.story-main_text');
    storyText.classList.toggle('expanded');
    storyText.classList.toggle('no-after'); 
    if (storyText.classList.contains('expanded')) {
        this.textContent = 'Скрыть';
    } else {
        this.textContent = 'читать полностью';
    }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: true, 
    loop: true,
    initialSlide: 1,
    navigation: {
        nextEl: "#nextBtn",
        prevEl: "#prevBtn",
    },
    grabCursor: true,
    breakpoints: {
        769: {
          slidesPerView: "auto",
          spaceBetween: 0,
        },
        0:{
          slidesPerView: "auto", 
          spaceBetween: 5, 
        },
    }
});
function updateImageIndex() {
    var currentIndex = swiper.realIndex + 1; 
    var totalImages = swiper.slides.length; 
    document.getElementById('currentImageIndex').textContent = currentIndex.toString().padStart(2, '0');
    document.getElementById('totalImages').textContent = totalImages.toString().padStart(2, '0');
}

updateImageIndex();

swiper.on('slideChange', function () {
    updateImageIndex();
});



