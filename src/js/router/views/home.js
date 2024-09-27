import { authGuard } from "../../utilities/authGuard";
import { setLogoutListener } from "../../ui/global/logout";
import { checkIfPageReload } from "../../utilities/checkIfPageReload";
import { readPosts } from "../../api/post/read";
import { loadAndDisplayPosts } from "../../ui/post/displayPosts";
import { displayLoggedInUserHome } from "../../ui/profile/displayUserProfile";
import { showSpinner, hideSpinner } from "../../utilities/loadingSpinner";
import { getLoggedInUserName } from "../../ui/profile/getLoggedInUser";

export async function init() {
  showSpinner();
  authGuard();
  setLogoutListener();
  setMyProfileEventListener();
  checkIfPageReload(); // Remove after testing
  displayLoggedInUserHome();
  const loadPosts = await readPosts(12, 1, "øyvind");
  loadAndDisplayPosts(loadPosts);
  hideSpinner();
}

init();


function setMyProfileEventListener() {
  const userName = getLoggedInUserName();
  const myProfileButton = document.querySelector("#myProfileButton");
  myProfileButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = `/profile/?username=${userName}`;
  });
}
