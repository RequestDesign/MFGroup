document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.content-main_block'); 
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    const itemsPerPage = 1; 
    const itemWidth = 350; 

    const scrollContainer = (container, direction) => {
        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const newScroll = direction === 'next' 
            ? Math.min(currentScroll + itemWidth * itemsPerPage, maxScroll)
            : Math.max(currentScroll - itemWidth * itemsPerPage, 0);
        container.scrollTo({ left: newScroll, behavior: 'smooth' });
    };

    containers.forEach(container => {
        nextButton.addEventListener('click', () => scrollContainer(container, 'next'));
        prevButton.addEventListener('click', () => scrollContainer(container, 'prev'));
    });
});
