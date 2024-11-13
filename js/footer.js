document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.btn-links_title');

    function initFooterLinks() {
        titles.forEach(title => {
            title.addEventListener('click', function() {
                // Проверка ширины окна
                if (window.matchMedia("(max-width: 48em)").matches) {
                    const currentLinks = this.nextElementSibling;
                    const isActive = currentLinks.style.display === 'grid';

                    // Закрываем все блоки и сбрасываем стрелки
                    titles.forEach(t => {
                        const links = t.nextElementSibling;
                        links.style.display = 'none';
                        t.querySelector('.arrow-drop-up').style.display = 'none';
                        t.querySelector('.arrow-drop-down').style.display = 'grid';
                    });

                    // Если текущий блок не активен, открываем его
                    if (!isActive) {
                        currentLinks.style.display = 'grid';
                        this.querySelector('.arrow-drop-up').style.display = 'block';
                        this.querySelector('.arrow-drop-down').style.display = 'none';
                    }
                }
            });
        });
    }

    // Инициализация ссылок при загрузке страницы
    initFooterLinks();
});
