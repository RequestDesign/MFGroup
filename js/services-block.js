document.addEventListener("DOMContentLoaded", function () {
  console.log("ready");

  function scrollActive(direction) {
    const buttons = document.querySelectorAll(".text-fon");
    const activeButton = document.querySelector(".text-fon.active-text");
    if (!activeButton) return;
    const currentIndex = Array.from(buttons).indexOf(activeButton);
    let newIndex = (currentIndex + direction + buttons.length) % buttons.length;

    buttons[newIndex].click();
  }

  document.getElementById("btn-up").addEventListener("click", function () {
    scrollActive(-1);
  });
  document.getElementById("btn-down").addEventListener("click", function () {
    scrollActive(1);
  });
  document.querySelectorAll(".text-fon").forEach((button) => {
    button.addEventListener("click", function () {
      document
        .querySelectorAll(".text-fon")
        .forEach((btn) => btn.classList.remove("active-text"));
      this.classList.add("active-text");
      const targetImage = this.getAttribute("data-target");
      document
        .querySelectorAll(".image-btn")
        .forEach((img) => img.classList.remove("image-active"));
      const activeImage = document.querySelector(
        `.image-btn img[data-image="${targetImage}"]`
      );
      if (activeImage) {
        activeImage.parentElement.classList.add("image-active");
      }
    });
  });

  const defaultButton = document.querySelector(".text-fon.active-text");
  if (defaultButton) {
    defaultButton.click();
  }
});
