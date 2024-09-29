import { onCreatePost } from "../post/create";

export function setupPostCreateEventListeners() {
  const form = document.forms.createPost;
  form.addEventListener("submit", onCreatePost);
}
