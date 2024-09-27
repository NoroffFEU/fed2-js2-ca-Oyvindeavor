import { displayErrorMessage, hideErrorMessage } from "./errorMessage";

export function setLoginInputListeners() {
  addEmailInputListener();
  addPasswordInputListener();
}

function addEmailInputListener() {
  const inputEmail = document.querySelector("#email");
  inputEmail.addEventListener("input", function () {
    if (inputEmail.value === "") {
      inputEmail.style.border = "";
      return;
    }

    if (inputEmail.checkValidity()) {
      hideErrorMessage("loginEmailError");
      inputEmail.style.border = "2px solid green";
    } else {
      inputEmail.style.border = "2px solid red";
      displayErrorMessage("loginEmailError", "Please enter a valid email address,  must end with @stud.noroff.no");
    }
  });
}

function addPasswordInputListener() {
  const inputPassword = document.querySelector("#password");
  inputPassword.addEventListener("input", function () {
    if (inputPassword.value === "") {
      inputPassword.style.border = "";
      return;
    }

    if (inputPassword.checkValidity()) {
      hideErrorMessage("loginPasswordError");
      inputPassword.style.border = "2px solid green";
    } else {
      inputPassword.style.border = "2px solid red";
      displayErrorMessage("loginPasswordError", "Please enter a password with at least 8 characters");
    }
  });
}
