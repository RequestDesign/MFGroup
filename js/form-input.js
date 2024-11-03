document.querySelectorAll(".form-input").forEach((input) => {
  const label = input.nextElementSibling; // Получаем метку один раз

  input.addEventListener("focus", function () {
    label.classList.add("active"); // Добавляем класс активной метки
  });

  input.addEventListener("blur", function () {
    // Проверяем, пустое ли поле, и если да, убираем класс активной метки
    if (!this.value) {
      label.classList.remove("active");
    }
    checkInputs(); // Проверяем состояние инпутов при потере фокуса
  });

  input.addEventListener("input", function () {
    // Добавляем класс active при вводе текста
    if (this.value) {
      label.classList.add("active"); // Добавляем класс активной метки
    } else {
      label.classList.remove("active"); // Убираем класс, если пусто
    }
    checkInputs(); // Проверяем состояние инпутов при вводе текста
  });

  label.addEventListener("click", function () {
    this.classList.add("clicked"); // Add class to make label disappear
  });
});



function checkInputs() {
  const inputs = document.querySelectorAll(".form-input");
  const submitButton = document.querySelector(".down-btn");
  const allFilled = Array.from(inputs).every(
    (input) => input.value.trim() !== ""
  );
  if (allFilled) {
    submitButton.classList.add("form-btn_active");
    submitButton.disabled = false;
    submitButton.style.cursor = "pointer";
  } else {
    submitButton.classList.remove("form-btn_active");
    submitButton.disabled = true;
    submitButton.style.cursor = "no-drop";
  }
}

const fileInput = document.getElementById("input__file");
const fileNameDisplay = document.getElementById("file-name");
const removeFileButton = document.getElementById("remove-file");
const fileText = document.getElementById("file-text");

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    fileNameDisplay.textContent = fileName;
    removeFileButton.style.display = "inline";
    fileText.style.display = "none";
  } else {
    fileNameDisplay.textContent = "";
    removeFileButton.style.display = "none";
    fileText.style.display = "inline";
  }
});

removeFileButton.addEventListener("click", () => {
  fileInput.value = "";
  fileNameDisplay.textContent = "";
  removeFileButton.style.display = "none";
  fileText.style.display = "inline";
});
