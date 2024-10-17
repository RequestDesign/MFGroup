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

  // Add event listener to label to make it disappear when clicked
  label.addEventListener("click", function () {
    this.classList.add("clicked"); // Add class to make label disappear
  });
});

// Функция для проверки всех инпутов
function checkInputs() {
  const inputs = document.querySelectorAll(".form-input");
  const submitButton = document.querySelector(".down-btn");
  const allFilled = Array.from(inputs).every(
    (input) => input.value.trim() !== ""
  ); // Проверяем, заполнены ли все инпуты
  if (allFilled) {
    submitButton.classList.add("form-btn_active"); // Добавляем класс активной кнопки
    submitButton.disabled = false; // Разрешаем отправку
    submitButton.style.cursor = "pointer"; // Изменяем курсор
  } else {
    submitButton.classList.remove("form-btn_active"); // Убираем класс активной кнопки
    submitButton.disabled = true; // Блокируем кнопку
    submitButton.style.cursor = "no-drop"; // Изменяем курсор
  }
}
