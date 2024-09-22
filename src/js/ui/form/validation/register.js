import { displayErrorMessage, hideErrorMessage } from "./errorMessage.js";

export function setFormInputListeners() {
  addNameInputListener();
  addEmailInputListener();
  addPasswordInputListener();
  addBioInputListener();
  addBannerInputListener();
  addAvatarInputListener();
}

// Name INPUT VALIDATION
function addNameInputListener() {
  const inputName = document.querySelector("#name");
  inputName.addEventListener("input", function () {
    if (inputName.value === "") {
      inputName.style.border = "";
      return;
    }

    if (inputName.checkValidity()) {
      hideErrorMessage("registerNameError");
      inputName.style.border = "2px solid green";
    } else {
      inputName.style.border = "2px solid red";
      displayErrorMessage("registerNameError", "Please enter a username using only letters and numbers (_) are permitted");
    }
  });
}

// EMAIL INPUT VALIDATION
function addEmailInputListener() {
  const inputEmail = document.querySelector("#email");
  inputEmail.addEventListener("input", function () {
    if (inputEmail.value === "") {
      inputEmail.style.border = "";
      return;
    }

    if (inputEmail.checkValidity()) {
      hideErrorMessage("registerEmailError");
      inputEmail.style.border = "2px solid green";
    } else {
      inputEmail.style.border = "2px solid red";
      displayErrorMessage("registerEmailError", "Please enter a valid email address");
    }
  });
}

// PASSWORD INPUT VALIDATION
function addPasswordInputListener() {
  const inputPassword = document.querySelector("#password");
  inputPassword.addEventListener("input", function () {
    if (inputPassword.value === "") {
      inputPassword.style.border = "";
      return;
    }

    if (inputPassword.checkValidity()) {
      hideErrorMessage("registerPasswordError");
      inputPassword.style.border = "2px solid green";
    } else {
      inputPassword.style.border = "2px solid red";
      displayErrorMessage("registerPasswordError", "Please enter a password with at least 6 characters");
    }
  });
}

// Bio INPUT VALIDATION
function addBioInputListener() {
  const inputBio = document.querySelector("#bio");
  inputBio.addEventListener("input", function () {
    if (inputBio.value === "") {
      inputBio.style.border = "";
      return;
    }

    if (inputBio.checkValidity()) {
      hideErrorMessage("registerBioError");
      inputBio.style.border = "2px solid green";
    } else {
      inputBio.style.border = "2px solid red";
      displayErrorMessage("registerBioError", "Please enter a bio with at least 10 characters");
    }
  });
}

// Banner img INPUT VALIDATION
function addBannerInputListener() {
  const inputBanner = document.querySelector("#banner");
  inputBanner.addEventListener("input", function () {
    if (inputBanner.value === "") {
      inputBanner.style.border = "";
      return;
    }

    if (inputBanner.checkValidity()) {
      hideErrorMessage("registerBannerError");
      inputBanner.style.border = "2px solid green";
    } else {
      inputBanner.style.border = "2px solid red";
      displayErrorMessage("registerBannerError", "Please enter a valid URL");
    }
  });
}
// Avatar img INPUT VALIDATION
function addAvatarInputListener() {
  const inputAvatar = document.querySelector("#avatar");
  inputAvatar.addEventListener("input", function () {
    if (inputAvatar.value === "") {
      inputAvatar.style.border = "";
      return;
    }

    if (inputAvatar.checkValidity()) {
      hideErrorMessage("registerAvatarImgError");
      inputAvatar.style.border = "2px solid green";
    } else {
      inputAvatar.style.border = "2px solid red";
      displayErrorMessage("registerAvatarImgError", "Please enter a valid URL");
    }
  });
}
