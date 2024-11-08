document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-content');
    const leftButton = document.querySelector('.left-arr'); 
    const rightButton = document.querySelector('.right-arr'); 
    const catalogLeftButton = document.querySelector('.arr-left'); 
    const catalogRightButton = document.querySelector('.arr-right'); 
    const currentImageElement = document.getElementById('currentImage');
    const imageCountElement = document.getElementById('imageCount'); 
    const currentIndexElement = document.getElementById('currentIndex'); 
    const totalImagesElement = document.getElementById('totalImages'); 
    const totalImages = images.length;
    let currentIndex = 0;

    function updateImageDisplay() {
        images.forEach((img, index) => {
            img.style.display = index === currentIndex ? 'block' : 'none';
        });
        currentImageElement.textContent = String(currentIndex + 1).padStart(2, '0');
        imageCountElement.textContent = String(totalImages).padStart(2, '0');
        currentIndexElement.textContent = String(currentIndex + 1).padStart(2, '0');
        totalImagesElement.textContent = String(totalImages).padStart(2, '0');
        leftButton.style.display = currentIndex === 0 ? 'none' : 'block'; 
        rightButton.style.display = 'block';
    }
 
    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0; 
        updateImageDisplay();
    });
    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : totalImages - 1; 
        updateImageDisplay();
    });
    catalogLeftButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
        updateImageDisplay();
    });
    catalogRightButton.addEventListener('click', () => {
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0; 
        updateImageDisplay();
    });
    updateImageDisplay();
    window.addEventListener('resize', () => {
        if (window.innerWidth < 48 * 16) {
            
        }
    });
});
