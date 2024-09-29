import { updateProfile } from "../../api/profile/update.js";
import { updateProfileDetails } from "../dom/create/profile/profileElements.js";
import { readProfile } from "../../api/profile/read.js";
import { getUpdateProfileFormData } from "../form/updateProfileInput.js";

export async function onUpdateProfile(event) {
  event.preventDefault();
  const username = document.querySelector(".username").textContent.trim();
  const profileData = getUpdateProfileFormData();

  // send data to the updateProfile function
  await updateProfile(username, profileData);
  // Fetch the updated data from the API
  const newProfileData = await readProfile(username);
  // Update the profile details in the ui with the new submitted data
  updateProfileDetails(newProfileData);
}
