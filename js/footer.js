function initFooterLinks() {
    document.querySelectorAll('.btn-links_title').forEach(title => {
        title.addEventListener('click', () => {
            const currentLinks = title.nextElementSibling; 
            const arrowUp = title.querySelector('.arrow-drop-up');
            const arrowDown = title.querySelector('.arrow-drop-down');
            document.querySelectorAll('.footer-links, .footer-contacts_city').forEach(links => {
                if (links !== currentLinks) {
                    links.style.display = 'none';
                    links.classList.remove('footer-links_active'); 
                    const otherArrows = links.previousElementSibling.querySelectorAll('.arrow-drop-up, .arrow-drop-down');
                    otherArrows[0].style.display = 'none'; 
                    otherArrows[1].style.display = 'block'; 
                }
            });
            const isActive = currentLinks.classList.toggle('footer-links_active');
            currentLinks.style.display = isActive ? 'grid' : 'none'; 
            arrowUp.style.display = isActive ? 'block' : 'none'; 
            arrowDown.style.display = isActive ? 'none' : 'block'; 
        });
    });
}
function checkWidth() {
    if (window.innerWidth <= 768) { 
        initFooterLinks(); 
    }
}
checkWidth();
window.addEventListener('resize', checkWidth);
