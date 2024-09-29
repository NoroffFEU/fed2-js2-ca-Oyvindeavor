import { authGuard } from "../../utilities/authGuard";
import { readPosts } from "../../api/post/read";
import { loadAndDisplayPosts } from "../../ui/post/displayPosts";
import { displayLoggedInUserHome } from "../../ui/profile/displayUserProfile";
import { showSpinner, hideSpinner } from "../../utilities/loadingSpinner";
import { setupEventListenersHome } from "../../ui/events/home";

export async function init() {
  showSpinner();
  authGuard();
  setupEventListenersHome();
  // Display the logged in user's profile
  displayLoggedInUserHome();
  // Fetch posts and load and display them
  const loadPosts = await readPosts(12, 1, "øyvind");
  loadAndDisplayPosts(loadPosts);
  hideSpinner();
}

init();

