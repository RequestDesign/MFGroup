document.addEventListener('DOMContentLoaded', function () {
    const selectedOption = document.getElementById('selected-option');
    const selectItems = document.querySelector('.select-items');
    const items = document.querySelectorAll('.select-item');

    selectedOption.addEventListener('click', function () {
        selectItems.classList.toggle('select-hide');
    });

    items.forEach(item => {
        item.addEventListener('click', function () {
            selectedOption.textContent = this.textContent; 
            selectedOption.setAttribute('data-value', this.getAttribute('data-value')); 
            selectItems.classList.add('select-hide'); 
        });
    });

    document.addEventListener('click', function (e) {
        if (!selectedOption.contains(e.target) && !selectItems.contains(e.target)) {
            selectItems.classList.add('select-hide');
        }
    });
});
