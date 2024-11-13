document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('filterButton');
    const filterDropdown = document.getElementById('filterDropdown');

    filterButton.addEventListener('click', function(event) {
        // Предотвращаем стандартное поведение Bootstrap
        event.preventDefault();
        event.stopPropagation();

        filterDropdown.classList.toggle('show');
    });
    document.addEventListener('click', function(event) {
        if (!filterButton.contains(event.target) && !filterDropdown.contains(event.target)) {
            filterDropdown.classList.remove('show');
        }
    });
});
