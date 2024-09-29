import { deletePost } from "../../api/post/delete";

export async function onDeletePost(event, postData, postArticle) {
  event.preventDefault();

  const confirmDelete = confirm("Are you sure you want to delete this post?");
  if (confirmDelete) {
    confirm("Post deleted");
    await deletePost(postData.id);
    postArticle.remove();
  }
}
