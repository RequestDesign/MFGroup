document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.block-input');
    const equipmentNameInput = document.querySelector('.input-equipment');
    const selectedOption = document.getElementById('selected-option');
    const selectItems = document.querySelector('.select-items');
    const items = document.querySelectorAll('.select-item');
    const noResultsMessage = document.getElementById('noResults');
    const searchButton = document.querySelector('.font-down_btn');

    noResultsMessage.style.display = 'none';

    selectedOption.addEventListener('click', function () {
        selectItems.classList.toggle('select-hide');
    });

    items.forEach(item => {
        item.addEventListener('click', function () {
            selectedOption.textContent = this.textContent; 
            selectedOption.setAttribute('data-value', this.getAttribute('data-value')); 
            selectItems.classList.add('select-hide'); 
            checkFields(); 
        });
    });

    document.addEventListener('click', function (e) {
        if (!selectedOption.contains(e.target) && !selectItems.contains(e.target)) {
            selectItems.classList.add('select-hide');
        }
    });

    equipmentNameInput.addEventListener('input', function () {
        checkFields(); 
    });

    function checkFields() {
        const equipmentName = equipmentNameInput.value.trim();
        const selectedOptionValue = selectedOption.getAttribute('data-value');

        if (equipmentName.length > 0 && selectedOptionValue !== null) {
            searchButton.classList.add('down-btn-active', 'active');
            noResultsMessage.style.display = 'none'; 
        } else {
            searchButton.classList.remove('down-btn-active', 'active');
            noResultsMessage.style.display = 'none'; 
        }
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем отправку формы

        const equipmentName = equipmentNameInput.value.trim();
        const selectedOptionValue = selectedOption.getAttribute('data-value');

       
        const results = mockDatabaseSearch(equipmentName, selectedOptionValue);

        if (results.length === 0) {
            noResultsMessage.style.display = 'block'; 
            searchButton.classList.remove('down-btn-active', 'active'); 
        } else {
            noResultsMessage.style.display = 'none'; 
            searchButton.classList.add('down-btn-active', 'active');
        }
    });

    function mockDatabaseSearch(equipmentName, selectedOptionValue) {
        // Пример данных для поиска
        const mockData = [
            { name: 'Оборудование 1', type: 'Тип 1' },
            { name: 'Оборудование 2', type: 'Тип 2' },
            { name: 'Оборудование 3', type: 'Тип 1' },
        ];

        return mockData.filter(item => 
            item.name.toLowerCase().includes(equipmentName.toLowerCase()) &&
            item.type === selectedOptionValue
        );
    }
});
