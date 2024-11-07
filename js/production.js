const blocks = document.querySelectorAll('.main-item_block');

blocks.forEach(block => {
    block.addEventListener('click', () => {
        const textBlock = block.nextElementSibling;
        textBlock.classList.toggle('active-item_text');
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