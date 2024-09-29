import { authGuard } from "../../utilities/authGuard";
import { loadProfilePosts } from "../../ui/dom/create/profile/profileElements";
import { updateProfileUi } from "../../ui/dom/create/profile/profileElements";
import { showSpinner, hideSpinner } from "../../utilities/loadingSpinner";
import { getPostFromUrlName } from "../../utilities/readUrl";
import { setupProfileEventListeners } from "../../ui/events/profile";

export async function init() {
  showSpinner();
  await updateProfileUi();
  setupProfileEventListeners();
  const posts = await getPostFromUrlName();
  loadProfilePosts(posts);
  authGuard();
  hideSpinner();
}

init();
