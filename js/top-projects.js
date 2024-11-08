const projectsBlock = document.getElementById('projectsBlock');
const scrollButton = document.getElementById('scrollButton');
let scrollAmount = 0; 
let isDragging = false;
let startX; 
let scrollLeft; 
let currentSlide = 0;
const totalSlides = projectsBlock.children.length; 

function scrollProjects(delta) {
    const maxScroll = projectsBlock.scrollWidth - projectsBlock.clientWidth; 
    scrollAmount += delta;
    if (scrollAmount < 0) {
        scrollAmount = 0; 
    } else if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll; 
    }
    projectsBlock.style.transform = `translateX(-${scrollAmount}px)`;
}
function enableSwipe() {
    projectsBlock.addEventListener("mousedown", startDrag);
    projectsBlock.addEventListener("touchstart", startDrag);
    projectsBlock.addEventListener("mousemove", drag);
    projectsBlock.addEventListener("touchmove", drag);
    projectsBlock.addEventListener("mouseup", stopDrag);
    projectsBlock.addEventListener("mouseleave", stopDrag);
    projectsBlock.addEventListener("touchend", stopDrag);
}
function startDrag(e) {
    isDragging = true;
    startX = e.pageX || e.touches[0].pageX; 
    scrollLeft = scrollAmount; 
}
function drag(e) {
    if (!isDragging) return; 
    const x = e.pageX || e.touches[0].pageX; 
    const walk = (x - startX) * 0.5; 
    scrollProjects(-walk); 
}
function stopDrag() {
    isDragging = false; 
}
// Обработчик кнопки прокрутки
scrollButton.addEventListener('click', () => {
    const maxScroll = projectsBlock.scrollWidth - projectsBlock.clientWidth; 
    if (scrollAmount >= maxScroll) {
        scrollAmount = 0; 
    } else {
        scrollAmount += 220; 
    }
    scrollProjects(0);
});
// Обработчик прокрутки мыши
projectsBlock.addEventListener('wheel', (e) => {
    e.preventDefault(); 
    const delta = e.deltaY;
    scrollProjects(-delta * 0.6); 
});

function toggleSwipeBehavior() {
    if (window.innerWidth <= 48 * 16) {
        enableSwipe(); 
    } else {
        // Удаляем обработчики, если это не мобильное устройство
        projectsBlock.removeEventListener("mousedown", startDrag);
        projectsBlock.removeEventListener("touchstart", startDrag);
        projectsBlock.removeEventListener("mousemove", drag);
        projectsBlock.removeEventListener("touchmove", drag);
        projectsBlock.removeEventListener("mouseup", stopDrag);
        projectsBlock.removeEventListener("mouseleave", stopDrag);
        projectsBlock.removeEventListener("touchend", stopDrag);
    }
}

window.addEventListener('resize', toggleSwipeBehavior);
toggleSwipeBehavior(); 

const buttons = document.querySelectorAll('.portfolio-top_btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active-btn'));
        button.classList.add('active-btn');
    });
});
