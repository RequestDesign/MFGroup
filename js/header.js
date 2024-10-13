
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = dropdown.querySelector('.dropdown-menu');

dropdown.addEventListener('mouseover', function() {
  dropdownMenu.style.display = 'block';
});

dropdown.addEventListener('mouseout', function() {
  dropdownMenu.style.display = 'none';
});

document.querySelector('.burger-btn').addEventListener('click', function() {
  const menu = document.querySelector('.header-top_burger');
  menu.classList.toggle('open');
});
document.querySelector('.burgar-btn_close').addEventListener('click', function() {
  const menu = document.querySelector('.header-top_burger');
  menu.classList.remove('open');
});