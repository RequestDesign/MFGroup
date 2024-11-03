// Select all buttons with the class 'main-item_btn'
const buttons = document.querySelectorAll('.main-item_btn');

// New SVG path to display on hover
const newSVGPath = `
    <path d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.84171 50.3536 3.64645L47.1716 0.464466C46.9763 0.269204 46.6597 0.269204 46.4645 0.464466C46.2692 0.659728 46.2692 0.976311 46.4645 1.17157L49.2929 4L46.4645 6.82843C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.7308 46.9763 7.7308 47.1716 7.53553L50.3536 4.35355ZM0 4.5H50V3.5H0V4.5Z" fill="#1F1F1F"/>
`;

// Original SVG path to revert back
const originalSVGPath = `
    <path d="M50.3536 8.35356C50.5488 8.1583 50.5488 7.84172 50.3536 7.64646L47.1716 4.46447C46.9763 4.26921 46.6597 4.26921 46.4645 4.46447C46.2692 4.65974 46.2692 4.97632 46.4645 5.17158L49.2929 8.00001L46.4645 10.8284C46.2692 11.0237 46.2692 11.3403 46.4645 11.5355C46.6597 11.7308 46.9763 11.7308 47.1716 11.5355L50.3536 8.35356ZM0 8.5H50V7.5H0V8.5Z" fill="white"/>
`;

// Add event listeners for each button
buttons.forEach(button => {
    const svg = button.querySelector('svg');

    button.addEventListener('mouseenter', () => {
        svg.innerHTML = newSVGPath; // Change to new SVG path
    });

    button.addEventListener('mouseleave', () => {
        svg.innerHTML = originalSVGPath; // Restore original SVG path
    });
});