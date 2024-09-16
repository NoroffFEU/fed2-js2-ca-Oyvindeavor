import { authGuard } from "../../utilities/authGuard";
import { setLogoutListener } from "../../ui/global/logout";
import { checkIfPageReload } from "../../utilities/checkIfPageReload";
import { readPosts } from "../../api/post/read";
import { loadAndDisplayPosts } from "../../ui/dom/postElements";
import { displayLoggedInUserHome } from "../../ui/profile/displayUserProfile";


async function init() {
    authGuard();
    setLogoutListener();
    checkIfPageReload(); // Remove after testing
    displayLoggedInUserHome();
    const loadPosts = await readPosts(12,1);
    loadAndDisplayPosts(loadPosts);
}

init();