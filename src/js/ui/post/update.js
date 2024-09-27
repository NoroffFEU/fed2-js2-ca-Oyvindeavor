import { updatePost } from "../../api/post/update";
import { getEditPostInputValues } from "../form/editPost";
import { readUrlId } from "../../ui/post/readUrl";

export async function onUpdatePost(event) {
  event.preventDefault();
  const id = readUrlId(); // Fetch the post ID from the URL
  console.log("id", id);
  const { title, body, media, tags } = getEditPostInputValues();
  await updatePost(id, { title, body, tags, media });
  window.location.href = `/post/?id=${id}`;
}
