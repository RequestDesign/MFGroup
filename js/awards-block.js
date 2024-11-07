document.addEventListener('DOMContentLoaded', () => {
    const awardsItems = document.querySelectorAll('.awards-content_item'); 
    const prevArr = document.getElementById('btn-arror_left'); 
    const nextArr = document.getElementById('btn-arror_rigth'); 
    
    let currentIndex = 3;
    function updateActiveImage() {
        awardsItems.forEach((item, index) => {
            const imageElement = item.querySelector('.image-awards'); 

            if (window.innerWidth <= 420) {
                if (index === currentIndex) {
                    imageElement.classList.add('active-image_awards'); 
                    item.style.display = 'grid'; 
                    item.style.opacity = '1'; 
                } else {
                    imageElement.classList.remove('active-image_awards'); 
                    item.style.display = 'none'; 
                }
            } else {
                item.style.display = 'grid'; 
                if (index === currentIndex) {
                    imageElement.classList.add('active-image_awards'); 
                } else {
                    imageElement.classList.remove('active-image_awards');
                }
            }
        });
    }
    nextArr.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % awardsItems.length; 
        updateActiveImage(); 
    });

    prevArr.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + awardsItems.length) % awardsItems.length; 
        updateActiveImage(); 
    });

    updateActiveImage();

    window.addEventListener('resize', updateActiveImage);
});
