function initFooterLinks() {
    document.querySelectorAll('.btn-links_title').forEach(title => {
        title.addEventListener('click', () => {
            const currentLinks = title.nextElementSibling; // Получаем соответствующий блок ссылок
            const arrowUp = title.querySelector('.arrow-drop-up');
            const arrowDown = title.querySelector('.arrow-drop-down');

            // Закрываем все другие секции, включая footer-contacts и footer-links
            document.querySelectorAll('.footer-links, .footer-contacts_city').forEach(links => {
                if (links !== currentLinks) {
                    links.style.display = 'none'; // Скрываем другие секции
                    links.classList.remove('footer-links_active'); // Убираем активный класс
                    const otherArrowUp = links.previousElementSibling.querySelector('.arrow-drop-up');
                    const otherArrowDown = links.previousElementSibling.querySelector('.arrow-drop-down');
                    otherArrowUp.style.display = 'none'; // Скрываем стрелку вверх
                    otherArrowDown.style.display = 'block'; // Показываем стрелку вниз
                }
            });

            // Переключаем текущую секцию
            const isActive = currentLinks.classList.toggle('footer-links_active');
            if (isActive) {
                currentLinks.style.display = 'grid'; // Показываем текущую секцию
                arrowUp.style.display = 'block'; // Показываем стрелку вверх
                arrowDown.style.display = 'none'; // Скрываем стрелку вниз
            } else {
                currentLinks.style.display = 'none'; // Скрываем текущую секцию
                arrowUp.style.display = 'none'; // Скрываем стрелку вверх
                arrowDown.style.display = 'block'; // Показываем стрелку вниз
            }
        });
    });
}

function checkWidth() {
    if (window.innerWidth <= 420) {
        initFooterLinks(); 
    }
}

checkWidth();

window.addEventListener('resize', checkWidth);
