import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";
import { checkIfPageReload } from "../../utilities/checkIfPageReload";

function init() {
  authGuard();
  checkIfPageReload();
  const form = document.forms.createPost;
  form.addEventListener("submit", onCreatePost);
}

init();
