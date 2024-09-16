import { getCreatePostFormData } from "../../ui/form/createPostFormData";
import { createPost } from "../../api/post/create";

export async function onCreatePost(event) {
  event.preventDefault();

  const formData = getCreatePostFormData();
  const result = await createPost(formData);
  console.log("Post created:", result.data); // Remove after testing

  const url = new URL(window.location.origin + "/post/");
  url.searchParams.set("id", result.id);
  window.history.pushState({}, "", url.toString());
  window.location.href = url.toString();
}
