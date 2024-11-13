document.querySelector('.toggle-button').addEventListener('click', function() {
    const storyText = document.querySelector('.family-info_text');
    const mediaQuery = window.matchMedia('(max-width: 48em)'); // Проверка на разрешение до 48em

    if (mediaQuery.matches) { // Если разрешение меньше или равно 48em
        storyText.classList.toggle('expanded');
        storyText.classList.toggle('no-after'); 
        if (storyText.classList.contains('expanded')) {
            this.textContent = 'Скрыть';
        } else {
            this.textContent = 'читать полностью';
        }
    }
});
