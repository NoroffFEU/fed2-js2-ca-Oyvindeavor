import { displayErrorMessage } from "../form/validation/errorMessage.js";

export function getUpdateProfileFormData() {
    const bio = document.querySelector("#bio").value.trim();
    const avatarInput = document.querySelector("#profileImg");
    const bannerInput = document.querySelector("#bannerImg");
  
    const profileData = {};
  
    profileData.bio = bio;
  
    if (avatarInput.value.trim() && avatarInput.checkValidity()) {
      profileData.avatar = avatarInput.value.trim();
    } else if (avatarInput.value.trim() === "") {
      console.log("Avatar URL is empty, not sending it to the API");
    } else {
      displayErrorMessage("registerAvatarImgError", "Please enter a valid URL");
    }
  
    if (bannerInput.value.trim() && bannerInput.checkValidity()) {
      profileData.banner = bannerInput.value.trim(); 
    } else if (bannerInput.value.trim() === "") {
      console.log("Banner URL is empty, not sending it to the API");
    } else {
      displayErrorMessage("registerBannerImgError", "Please enter a valid URL");
    }
  
    return profileData;
  }
  
  
