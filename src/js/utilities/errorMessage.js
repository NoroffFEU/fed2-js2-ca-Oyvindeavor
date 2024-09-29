export function displayErrorMessage(elementId, message) {
  const errorElement = document.querySelector(`#${elementId}`);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

export function hideErrorMessage(elementId) {
  const errorElement = document.querySelector(`#${elementId}`);
  errorElement.style.display = "none";
}

export function clearErrorMessages() {
  const errorElement = document.querySelectorAll(".error-message");
  errorElement.forEach((element) => {
    element.textContent = "";
    element.style.display = "none";
  });
}
