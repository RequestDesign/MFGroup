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
                    const otherArrowUp = links.previousElementSibling.querySelector('.arrow-drop-up');
                    const otherArrowDown = links.previousElementSibling.querySelector('.arrow-drop-down');
                    otherArrowUp.style.display = 'none'; 
                    otherArrowDown.style.display = 'block'; 
                }
            });
            const isActive = currentLinks.classList.toggle('footer-links_active');
            if (isActive) {
                currentLinks.style.display = 'grid'; 
                arrowUp.style.display = 'block'; 
                arrowDown.style.display = 'none'; 
            } else {
                currentLinks.style.display = 'none'; 
                arrowUp.style.display = 'none'; 
                arrowDown.style.display = 'block'; 
            }
        });
    });
}
function checkWidth() {
    if (window.innerWidth <= 48 * 16) {
        initFooterLinks(); 
    }
}
checkWidth();

window.addEventListener('resize', checkWidth);
