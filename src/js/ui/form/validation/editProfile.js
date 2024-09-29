import { displayErrorMessage, hideErrorMessage } from "../../../utilities/errorMessage";

export function setEditProfileEventListeners() {
  addAvatarInputListener();
  addBannerInputListener();
}

function addAvatarInputListener() {
  const avatarInput = document.querySelector("#profileImg");
  avatarInput.addEventListener("input", handleInput);

  function handleInput() {
    if (avatarInput.checkValidity()) {
      avatarInput.style.border = "2px solid green";
      hideErrorMessage("error-message-profile");
    } else {
      avatarInput.style.border = "2px solid red";
      displayErrorMessage("error-message-profile", "Please enter a valid URL");
    }
    if (avatarInput.value === "") {
      avatarInput.style.border = "";
      hideErrorMessage("error-message-profile");
    }
  }
}

function addBannerInputListener() {
  const bannerInput = document.querySelector("#bannerImg");
  bannerInput.addEventListener("input", handleInput);

  function handleInput() {
    if (bannerInput.checkValidity()) {
      bannerInput.style.border = "2px solid green";
      hideErrorMessage("error-message-profile");
    } else {
      bannerInput.style.border = "2px solid red";
      displayErrorMessage("error-message-profile", "Please enter a valid URL");
    }
    if (bannerInput.value === "") {
      bannerInput.style.border = "";
      hideErrorMessage("error-message-profile");
    }
  }
}
