import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * @description Sends a delete request to the API to delete a post by its ID.
 * @param {number} id - The ID of the post to delete.
 * @returns {Promise<Object>} - A promise that resolves to the response data if the delete request is successful.
 * @throws {Error} - Throws an error if the delete request fails, with a message indicating the reason for the failure.
 * @example
 * import { deletePost } from "./api/post/delete";
 * const deleteButton = document.querySelector("#delete-button");
 * deleteButton.addEventListener("click", async () => {
 * try {
 * const response = await deletePost(273);
 * console.log("Post deleted successfully:", response.data);
 * } catch (error) {
 * console.error("Failed to delete post:", error.message);
 * }
 * });
 *
 */
export async function deletePost(id) {
  const url = `${API_SOCIAL_POSTS}/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: headers(),
    });

    let data = null;
    if (response.ok && response.status !== 204) {
      data = await response.json();
    }

    if (!response.ok) {
      const errorMessage = data && data.errors ? data.errors[0].message : "Failed to delete post";
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Error deleting post", error);
  }
}

/**
 * @description Sends a delete request to the API to delete a comment by its ID on a post, and id of the comment.
 * @param {number} postId
 * @param {number} commentId
 * @returns
 * @throws {Error} - Throws an error if the delete request fails, with a message indicating the reason for the failure.
 * @example
 * import { deleteComment } from "./api/post/delete";
 * const deleteButton = document.querySelector("#delete-comment-button");
 * deleteButton.addEventListener("click", async () => {
 * const response = await deleteComment(401, 76); // postId = The id of the post, commentId = the id of the comment
 * console.log("Comment deleted successfully:", response.data);
 * console.error("Failed to delete comment:", error.message);
 * }
 */
export async function deleteComment(postId, commentId) {
  const url = `${API_SOCIAL_POSTS}/${postId}/comment/${commentId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: headers(),
    });

    let data = null;
    if (response.ok && response.status !== 204) {
      data = await response.json();
    }

    if (!response.ok) {
      const errorMessage = data && data.errors ? data.errors[0].message : "Failed to delete comment";
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    console.error("Error deleting comment", error);
  }
}
