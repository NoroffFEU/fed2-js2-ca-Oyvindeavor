import { authGuard } from "../../utilities/authGuard";
import { checkIfPageReload } from "../../utilities/checkIfPageReload";
import { setLogoutListener } from "../../ui/global/logout";
import { readUrlName } from "../../ui/profile/readUrlName";
import { readPostsByUser } from "../../api/post/read";
import { loadProfilePosts } from "../../ui/dom/create/profile/profileElements";
import { onUpdateProfile } from "../../ui/profile/update";
import { updateProfileUi } from "../../ui/dom/create/profile/profileElements";
import { setEditProfileEventListeners } from "../../ui/form/validation/editProfile";
import { showSpinner, hideSpinner } from "../../utilities/loadingSpinner";

export async function init() {
  showSpinner();
  await updateProfileUi();
  const form = document.forms.updateProfile;
  form.addEventListener("submit", onUpdateProfile);

  const name = readUrlName();
  const posts = await readPostsByUser(name, 12, 1, "øyvind");
  loadProfilePosts(posts);
  authGuard();
  checkIfPageReload(); // Remove after testing
  setLogoutListener();
  setEditProfileEventListeners();
  hideSpinner();
}

init();

