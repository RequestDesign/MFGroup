document.addEventListener('DOMContentLoaded', () => {
    const awardsItems = document.querySelectorAll('.reward-item'); 
    const prevRew = document.getElementById('reward-btn_left'); 
    const nextRew = document.getElementById('reward-btn_rigth'); 
    
    let currentIndex = 0; 
    function updateActiveImage() {
        awardsItems.forEach((item, index) => {
            const imageElement = item.querySelector('.reward-image'); 

            if (window.innerWidth <= 48 * 16) {
                if (index === currentIndex) {
                    imageElement.classList.add('active-image_awards'); 
                    item.style.display = 'grid'; 
                    item.style.opacity = '1'; 
                } else {
                    imageElement.classList.remove('active-image_awards'); 
                    item.style.display = 'none'; 
                }
            } 
        });
    }
    
    nextRew.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % awardsItems.length; 
        updateActiveImage(); 
    });
    prevRew.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + awardsItems.length) % awardsItems.length; 
        updateActiveImage(); 
    });

    updateActiveImage();
    window.addEventListener('resize', updateActiveImage);
});
