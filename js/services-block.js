const btnUp = document.getElementById("btn-up");
const btnDown = document.getElementById("btn-down");
const catalogItems = document.querySelectorAll(".main-catalog_item");

let currentIndex = 2; 

catalogItems.forEach((item) => {
  item.addEventListener("click", () => {
    
    const button = item.querySelector(".text-fon");
    const imageBtn = item.querySelector(".image-btn");

    document.querySelectorAll(".text-fon").forEach((btn) => {
      btn.classList.remove("active-text");
    });

    document.querySelectorAll(".image-btn").forEach((btn) => {
      btn.classList.remove("image-active");
      btn.style.display = "none"; 
    });

    button.classList.toggle("active-text");

    if (imageBtn.classList.contains("image-active")) {
      imageBtn.classList.remove("image-active"); 
      imageBtn.style.display = "none";
    } else {
      imageBtn.classList.add("image-active");
      imageBtn.style.display = "flex"; 
    }
  });
});

function updateActiveItem() {
    catalogItems.forEach((item, index) => {
        const button = item.querySelector(".text-fon");
        const imageBtn = item.querySelector(".image-btn");

        button.classList.remove("active-text");
        imageBtn.classList.remove("image-active");

        if (index === currentIndex) {
            button.classList.add("active-text");
            imageBtn.classList.add("image-active");
        }else if(index !== currentIndex){
            button.classList.remove("active-text");
            imageBtn.classList.remove("image-active"); 
            imageBtn.style.display = "none";
        }
    });
}
btnUp.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = catalogItems.length - 1;
    }
    updateActiveItem();
});

btnDown.addEventListener('click', () => {
    if (currentIndex < catalogItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateActiveItem();
});

updateActiveItem();