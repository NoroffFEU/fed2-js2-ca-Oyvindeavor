import { displayErrorMessage, hideErrorMessage } from "../../../utilities/errorMessage";

export function setupPostEditListeners() {
  // input listeners for the post title, body, and image
  addTitleInputListener();
  addBodyInputListener();
  addImageInputListener();
  // blur events for the post title, body, and image
  addTitleBlurEvent();
  addBodyBlurEvent();
  addImageBlurEvent();
}

function addTitleInputListener() {
  const postTitleInput = document.querySelector("#postTitle");
  postTitleInput.addEventListener("input", () => {
    if (postTitleInput.checkValidity()) {
      postTitleInput.style.border = "2px solid green";
      hideErrorMessage("error-message-title");
    } else {
      postTitleInput.style.border = "2px solid red";
      displayErrorMessage("error-message-title", "Please enter a title");
    }
    if (postTitleInput.value === "") {
      postTitleInput.style.border = "";
      displayErrorMessage("error-message-title", "Title is required");
    }
  });
}

function addBodyInputListener() {
  const postBodyInput = document.querySelector("#postBody");
  postBodyInput.addEventListener("input", () => {
    if (postBodyInput.checkValidity()) {
      postBodyInput.style.border = "2px solid green";
      hideErrorMessage("error-message-body");
    }
  });
}

function addImageInputListener() {
  const postImageInput = document.querySelector("#postImage");
  postImageInput.addEventListener("input", () => {
    if (postImageInput.checkValidity()) {
      postImageInput.style.border = "2px solid green";
      hideErrorMessage("error-message-image");
    } else {
      postImageInput.style.border = "2px solid red";
      displayErrorMessage("error-message-image", "Please enter a valid URL");
    }
    if (postImageInput.value === "") {
      postImageInput.style.border = "";
      hideErrorMessage("error-message-image");
    }
  });
}

function addTitleBlurEvent() {
  const postTitle = document.querySelector(".post-title");
  const postTitleInput = document.querySelector("#postTitle");
  postTitleInput.addEventListener("blur", () => {
    postTitle.textContent = postTitleInput.value;
  });
}

function addBodyBlurEvent() {
  const postBody = document.querySelector(".post-body");
  const postBodyInput = document.querySelector("#postBody");
  postBodyInput.addEventListener("blur", () => {
    postBody.textContent = postBodyInput.value;
  });
}

function addImageBlurEvent() {
  const postImage = document.querySelector(".post-img");
  const postImageInput = document.querySelector("#postImage");
  postImageInput.addEventListener("blur", () => {
    if (postImageInput.checkValidity()) {
      postImage.src = postImageInput.value;
    }
  });
}
