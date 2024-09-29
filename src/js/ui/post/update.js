import { updatePost } from "../../api/post/update";
import { getEditPostInputValues } from "../form/editPost";
import { readUrlId } from "../../utilities/readUrl";

// Fetches the post ID from the URL, updates the post and redirects to the post page
export async function onUpdatePost(event) {
  event.preventDefault();
  const id = readUrlId(); // Fetch the post ID from the URL
  const { title, body, media, tags } = getEditPostInputValues();
  await updatePost(id, { title, body, tags, media });
  window.location.href = `/post/?id=${id}`;
}
