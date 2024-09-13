import { getCreatePostFormData } from "../../ui/form/createPostFormData";
import { createPost } from "../../api/post/create";

export async function onCreatePost(event) {
  event.preventDefault();

  // Get form data
  const formData = getCreatePostFormData();

  // Create post (send form data to API)
  const result = await createPost(formData);
  console.log("Post created:", result); // Remove after testing

  // Make this into a function later on
  // Create new URL
  const url = new URL(window.location.origin + "/post/");

  // Set the query parameter
  url.searchParams.set("id", result.id);

  // Redirect to the new URL
  window.history.pushState({}, "", url.toString());
  window.location.href = url.toString();

  // Make the query parameter into a function later on
}
