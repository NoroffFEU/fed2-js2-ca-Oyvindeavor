import { getCreatePostFormData } from "../../ui/form/createPostFormData";
import { createPost } from "../../api/post/create";

export async function onCreatePost(event) {
  event.preventDefault();

  // Gets the form data
  const formData = getCreatePostFormData();
  // Send api request to create post
  const result = await createPost(formData);
  console.log("Post created:", result.data); // Remove after testing
  window.location.href = `/post/?id=${result.id}`;
}
