document.addEventListener('DOMContentLoaded', () => {
    const awardsItems = document.querySelectorAll('.awards-content_item');
    const prevAward = document.getElementById('award-left');
    const nextAward = document.getElementById('award-rigth');
    
    let currentIndex = 0; 

    function updateActiveImage() {
        awardsItems.forEach((item, index) => {
            const textElement = item.querySelector('.image-awards_text'); 
            
            if (window.innerWidth <= 420) {
                if (index === currentIndex) {
                    item.classList.remove('active-image_awards');
                    item.style.display = 'grid'; 
                    textElement.style.display = 'grid'; 
                    item.style.opacity = '1'; 
                } else {
                    item.style.display = 'none'; 
                }
            } else {
              
                item.style.display = 'grid';
                if (index === currentIndex) {
                    item.classList.add('active-image_awards'); 
                } else {
                    item.classList.remove('active-image_awards'); 
                }
            }
        });
    }
    nextAward.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % awardsItems.length; 
        updateActiveImage();
    });

    prevAward.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + awardsItems.length) % awardsItems.length; 
        updateActiveImage();
    });

    updateActiveImage();
    window.addEventListener('resize', updateActiveImage);
});


