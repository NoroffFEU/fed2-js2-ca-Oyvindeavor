import { authGuard } from "../../utilities/authGuard";
import { populateEditForm } from "../../ui/form/editPost";
import { displayPreviewPost } from "../../ui/form/editPost";
import { setupPostEditEventListeners } from "../../ui/events/postEdit";

async function init() {
  authGuard();
  await populateEditForm();
  displayPreviewPost();
  setupPostEditEventListeners();
}

init();
