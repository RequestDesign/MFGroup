// document.addEventListener("DOMContentLoaded", () => {
//     const container = document.querySelector(".similar-content_main");
//     const prevButtonTop = document.getElementById("arror_left_top");
//     const nextButtonTop = document.getElementById("arror_rigth_top");
//     const prevButtonBottom = document.getElementById("arror_left_bottom");
//     const nextButtonBottom = document.getElementById("arror_rigth_bottom");
    
//     let scrollPosition = 0;
//     const gap = 3.125; 
//     let itemWidth;
//     let totalWidth; 
//     let maxScrollPosition = 0; 
//     function updateSlider() {
//         const isMobile = window.innerWidth <= 48 * 16; 
//         itemWidth = isMobile ? 44.4 : 8;
//         totalWidth = itemWidth + gap;
        
//         const items = container.children;
//         const totalItems = items.length;
//         maxScrollPosition = (totalItems - 2) * totalWidth; 
        
//         scrollPosition = Math.max(0, Math.min(scrollPosition, maxScrollPosition));
//         container.style.transform = `translateX(-${scrollPosition}vw)`; 
//     }
//     function scrollToSlide(increment) {
//         scrollPosition += increment * totalWidth;
//         scrollPosition = Math.max(0, Math.min(scrollPosition, maxScrollPosition)); 
//         container.style.transform = `translateX(-${scrollPosition}vw)`; 
//     }
//     prevButtonTop.addEventListener("click", () => scrollToSlide(-1));
//     nextButtonTop.addEventListener("click", () => scrollToSlide(1));
//     prevButtonBottom.addEventListener("click", () => scrollToSlide(-1));
//     nextButtonBottom.addEventListener("click", () => scrollToSlide(1));

//     updateSlider();

//     window.addEventListener("resize", updateSlider);
// });
