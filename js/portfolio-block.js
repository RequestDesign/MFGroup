const images = document.querySelectorAll('.portfolio-image');
let currentIndex = 0;

// Show the first image by default
images[currentIndex].classList.add('active');

document.querySelector('.btn-arror_left').addEventListener('click', () => {
    // Hide current image
    images[currentIndex].classList.remove('active');

    // Update index
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around

    // Show new current image
    images[currentIndex].classList.add('active');
});

document.querySelector('.btn-arror_rigth').addEventListener('click', () => {
    // Hide current image
    images[currentIndex].classList.remove('active');

    // Update index
    currentIndex = (currentIndex + 1) % images.length; // Wrap around

    // Show new current image
    images[currentIndex].classList.add('active');
});
