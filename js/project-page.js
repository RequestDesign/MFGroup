document.querySelector('.toggle-button').addEventListener('click', function() {
    const storyText = document.querySelector('.story-main_text');
    storyText.classList.toggle('expanded');

    if (storyText.classList.contains('expanded')) {
        this.textContent = 'Скрыть';
    } else {
        this.textContent = 'читать полностью';
    }
});

// document.addEventListener('DOMContentLoaded', () => {
//     const images = document.querySelectorAll('.image-item');
//     const portfolioContainer = document.querySelector('.portfolio-main_items');
//     const currentImageIndexDisplay = document.getElementById('currentImageIndex');
//     const totalImagesDisplay = document.getElementById('totalImages');

//     let ImageIndex = 0;

//     function updateSlider() {
//         const isMobile = window.innerWidth <= 420; 
//         const imageWidth = isMobile ? 90.933 + 0.447 : 39.323 + 0; 
//         const totalWidth = imageWidth;
//         let offset = -ImageIndex * totalWidth;
//         portfolioContainer.style.transform = `translateX(${offset}vw)`;
//     }

//     updateSlider();

//     document.getElementById('nextBtnImage').addEventListener('click', () => {
//         if (ImageIndex < images.length - 1) {
//             ImageIndex++;
//             updateSlider();
//         }
//     });

//     document.getElementById('prevBtnImage').addEventListener('click', () => {
//         if (ImageIndex > 0) {
//             ImageIndex--;
//             updateSlider();
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-item');
    const portfolioContainer = document.querySelector('.portfolio-main_items');
    const currentImageIndexDisplay = document.getElementById('currentImageIndex');
    const totalImagesDisplay = document.getElementById('totalImages');
    const prevBtnImage = document.getElementById('prevBtnImage');
    const nextBtnImage = document.getElementById('nextBtnImage');
    let ImageIndex = 0;
    let forwardClickCount = 0; // Счетчик кликов по кнопке "Вперед"

    // Получаем общее количество изображений
    const totalImagesCount = images.length;
    totalImagesDisplay.textContent = String(totalImagesCount).padStart(2, '0');
    updateSlider(); // Обновляем слайдер при загрузке

    function updateSlider() {
        const isMobile = window.innerWidth <= 420; 
        const imageWidth = isMobile ? 90.933 + 0.447 : 19.323 + 0; 
        const totalWidth = imageWidth;
        let offset = -ImageIndex * totalWidth;
        portfolioContainer.style.transform = `translateX(${offset}vw)`;
        currentImageIndexDisplay.textContent = String(ImageIndex + 1).padStart(2, '0'); // Обновляем текущий индекс
    }

    nextBtnImage.addEventListener('click', () => {
        if (forwardClickCount < 2) { // Проверяем, было ли три клика
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
            forwardClickCount = 0; // Сбрасываем счетчик при нажатии "Назад"
        }
    });

    // Сбрасываем счетчик кликов через 1 секунду
    setInterval(() => {
        forwardClickCount = 0;
    }, 1);
});




