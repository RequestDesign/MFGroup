document.querySelectorAll(".form-input").forEach((input) => {
  const label = input.nextElementSibling;

  input.addEventListener("focus", function () {
    label.classList.add("active");
  });

  input.addEventListener("blur", function () {
    if (!this.value) {
      label.classList.remove("active");
    }
    checkInputs();
  });

  input.addEventListener("input", function () {
    if (this.value) {
      label.classList.add("active");
    } else {
      label.classList.remove("active");
    }
    checkInputs();
  });

  label.addEventListener("click", function () {
    this.classList.add("clicked");
  });
});

function checkInputs() {
  const inputs = document.querySelectorAll(".form-input");
  const submitButton = document.querySelector(".down-btn");
  const agreementCheckbox = document.getElementById("agreement");
  
  const allFilled = Array.from(inputs).every(
    (input) => input.value.trim() !== ""
  );
  const isAgreementChecked = agreementCheckbox.checked; 

  if (allFilled && isAgreementChecked) {
    submitButton.classList.add("form-btn_active");
    submitButton.disabled = false;
    submitButton.style.cursor = "pointer";
  } else {
    submitButton.classList.remove("form-btn_active");
    submitButton.disabled = true;
    submitButton.style.cursor = "no-drop";
  }
}

const agreementCheckbox = document.getElementById("agreement");
agreementCheckbox.addEventListener("change", checkInputs);

const fileInput = document.getElementById("input__file");
const fileNameDisplay = document.getElementById("file-name");
const removeFileButton = document.getElementById("remove-file");
const fileText = document.getElementById("file-text");
const errorMessage = document.querySelector(".input__file-button-err");



fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const fileName = file.name;
    const fileSizeMB = file.size / (1024 * 1024);
 
    if (fileSizeMB > 3) {
      errorMessage.style.display = "flex";
      fileNameDisplay.textContent = "";
      removeFileButton.style.display = "none";
      fileText.style.display = "inline";
    } else {
      errorMessage.style.display = "none";
      fileNameDisplay.textContent = fileName;
      removeFileButton.style.display = "inline";
      fileText.style.display = "none";
    }
  } else {
    fileNameDisplay.textContent = "";
    removeFileButton.style.display = "none";
    fileText.style.display = "inline";
    errorMessage.style.display = "none";
  }
});

removeFileButton.addEventListener("click", () => {
  fileInput.value = "";
  fileNameDisplay.textContent = "";
  removeFileButton.style.display = "none";
  fileText.style.display = "inline";
  errorMessage.style.display = "none";
});
