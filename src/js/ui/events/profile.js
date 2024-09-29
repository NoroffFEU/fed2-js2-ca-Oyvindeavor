import { onUpdateProfile } from "../profile/update";
import { setLogoutListener } from "../global/logout";
import { setEditProfileEventListeners } from "../form/validation/editProfile";


export function setupProfileEventListeners() {
  const form = document.forms.updateProfile;
  form.addEventListener("submit", onUpdateProfile);
  setLogoutListener();
  // Validation event listeners located in form/validation/editProfile.js
  setEditProfileEventListeners();
}
