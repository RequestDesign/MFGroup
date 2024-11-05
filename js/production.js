const blocks = document.querySelectorAll('.main-item_block');

// Добавляем обработчик событий для каждого блока
blocks.forEach(block => {
    block.addEventListener('click', () => {
        // Находим следующий элемент с классом main-item_text
        const textBlock = block.nextElementSibling;

        // Переключаем класс active-item_text
        textBlock.classList.toggle('active-item_text');

        // Переключаем видимость иконок
        const plusIcon = block.querySelector('.plus-svg');
        const minusIcon = block.querySelector('.minus-svg');

        if (textBlock.classList.contains('active-item_text')) {
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        } else {
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        }
    });
});