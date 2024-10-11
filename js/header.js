
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = dropdown.querySelector('.dropdown-menu');

dropdown.addEventListener('mouseover', function() {
  dropdownMenu.style.display = 'block';
});

dropdown.addEventListener('mouseout', function() {
  dropdownMenu.style.display = 'none';
});
