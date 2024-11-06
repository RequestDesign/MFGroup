document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.portfolio-image');
    const portfolioContainer = document.querySelector('.portfolio_main-image');
    let currentIndex = 0;

    function updateSlider() {
        const isMobile = window.innerWidth <= 420; // Проверяем, находимся ли мы на мобильном устройстве
        const imageWidth = isMobile ? 90.933 + 0.447 : 39.323 + 2; // Ширина изображения в vw
        const totalWidth = imageWidth; // Полная ширина одного изображения без отступов

        // Вычисляем смещение
        let offset = -currentIndex * totalWidth;

        portfolioContainer.style.transform = `translateX(${offset}vw)`;
    }

    updateSlider();

    document.getElementById('nextBtn').addEventListener('click', () => {
        // Проверяем, не достигли ли мы последнего изображения
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        // Проверяем, не находимся ли мы на первом изображении
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
});

