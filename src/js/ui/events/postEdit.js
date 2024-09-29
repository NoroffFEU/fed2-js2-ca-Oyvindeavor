import { setupPostEditListeners } from "../form/validation/editPost";
import { onUpdatePost } from "../post/update";

export function setupPostEditEventListeners() {
    const form = document.forms.editPostForm;
    form.addEventListener("submit", onUpdatePost);
    // Validation event listeners located in form/validation/editPost.js
    setupPostEditListeners();
    }