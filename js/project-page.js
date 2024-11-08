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


document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-item');
    const portfolioContainer = document.querySelector('.portfolio-main_items');
    const currentImageIndexDisplay = document.getElementById('currentImageIndex');
    const totalImagesDisplay = document.getElementById('totalImages');
    const prevBtnImage = document.getElementById('prevBtnImage');
    const nextBtnImage = document.getElementById('nextBtnImage');
    let ImageIndex = 0;
    let forwardClickCount = 0; 

    const totalImagesCount = images.length;
    totalImagesDisplay.textContent = String(totalImagesCount).padStart(2, '0');
    updateSlider(); 

    function updateSlider() {
        const isMobile = window.innerWidth <= 48 * 16; 
        const imageWidth = isMobile ? 90.933 + 0.447 : 19.323 + 0; 
        const totalWidth = imageWidth;
        let offset = -ImageIndex * totalWidth;
        portfolioContainer.style.transform = `translateX(${offset}vw)`;
        currentImageIndexDisplay.textContent = String(ImageIndex + 1).padStart(2, '0'); 
    }
    nextBtnImage.addEventListener('click', () => {
        if (forwardClickCount < 2) {
            forwardClickCount++;
            if (ImageIndex < totalImagesCount - 1) {
                ImageIndex++;
                updateSlider();
            }
        }
    });
    prevBtnImage.addEventListener('click', () => {
        if (ImageIndex > 0) {
            ImageIndex--;
            updateSlider();
            forwardClickCount = 0; 
        }
    });
    setInterval(() => {
        forwardClickCount = 0;
    }, 1);
});




