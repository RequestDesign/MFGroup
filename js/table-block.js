document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.content-main_block');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    const itemsPerPage = 1; 
    const itemWidth = 350; 

    nextButton.addEventListener('click', () => {
        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const newScroll = Math.min(currentScroll + itemWidth * itemsPerPage, maxScroll);
        container.scrollTo({ left: newScroll, behavior: 'smooth' });
    });

    prevButton.addEventListener('click', () => {
        const currentScroll = container.scrollLeft;
        const newScroll = Math.max(currentScroll - itemWidth * itemsPerPage, 0);
        container.scrollTo({ left: newScroll, behavior: 'smooth' });
    });
});
