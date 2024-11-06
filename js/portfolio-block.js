document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.portfolio-image');
    const portfolioContainer = document.querySelector('.portfolio_main-image');
    let currentIndex = 0;

    function updateSlider() {
        const isMobile = window.innerWidth <= 420; 
        const imageWidth = isMobile ? 90.933 + 0.447 : 39.323 + 2; 
        const totalWidth = imageWidth;
        let offset = -currentIndex * totalWidth;
        portfolioContainer.style.transform = `translateX(${offset}vw)`;
    }

    updateSlider();

    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
});

