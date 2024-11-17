document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.btn-links_title');

    function initFooterLinks() {
        titles.forEach(title => {
            title.addEventListener('click', function() {
                if (window.matchMedia("(max-width: 48em)").matches) {
                    const currentLinks = this.nextElementSibling;
                    const isActive = currentLinks.style.display === 'grid';

            
                    titles.forEach(t => {
                        const links = t.nextElementSibling;
                        links.style.display = 'none';
                        t.querySelector('.arrow-drop-up').style.display = 'none';
                        t.querySelector('.arrow-drop-down').style.display = 'grid';
                    });

                    if (!isActive) {
                        currentLinks.style.display = 'grid';
                        this.querySelector('.arrow-drop-up').style.display = 'block';
                        this.querySelector('.arrow-drop-down').style.display = 'none';
                    }
                }
            });
        });
    }

    initFooterLinks();
});
