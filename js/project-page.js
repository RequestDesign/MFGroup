document.querySelector('.toggle-button').addEventListener('click', function() {
    const storyText = document.querySelector('.story-main_text');
    storyText.classList.toggle('expanded');

    // Изменение текста кнопки в зависимости от состояния
    if (storyText.classList.contains('expanded')) {
        this.textContent = 'Скрыть';
    } else {
        this.textContent = 'читать полностью';
    }
});
