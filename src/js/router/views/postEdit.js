import { authGuard } from "../../utilities/authGuard";
import { populateEditForm } from "../../ui/form/editPost";
import { setupPostEditListeners } from "../../ui/form/validation/editPost";
import { displayPreviewPost } from "../../ui/form/editPost";
import { onUpdatePost } from "../../ui/post/update";

async function init() {
  const form = document.forms.editPostForm;
  form.addEventListener("submit", onUpdatePost);
  authGuard();
  await populateEditForm();
  displayPreviewPost();
  setupPostEditListeners();
}

init();
