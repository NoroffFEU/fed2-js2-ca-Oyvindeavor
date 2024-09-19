import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * @description Comments on a post by sending the provided comment to the API.
 * Takes in the post and comment data, constructs a comment object, and sends a POST request to the API endpoint.
 * @param {object} post
 * @param {string} comment
 * @returns {Promise<void>} A promise that resolves when the comment has been added.
 * @example
 * // Comment on a post
 * const post = { id: 1, title: "Example, post", body: "This is an example post." };
 * commentOnPost(post, "This is a comment");
 *
 */
export async function commentOnPost(post, comment) {
  const url = `${API_SOCIAL_POSTS}/${post.id}/comment`;
  const response = await fetch(url, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ body: comment }),
  });
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.errors[0].message);
  }
  console.log("Comment data", responseData.data); // remove after testing
}

export async function replyToComment(post, commentId, reply) {
  const url = `${API_SOCIAL_POSTS}/${post.id}/comment/${commentId}/reply`;
  const response = await fetch(url, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ body: reply }),
  });
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.errors[0].message);
  }
  console.log("Reply data", responseData.data); // remove after testing
}
