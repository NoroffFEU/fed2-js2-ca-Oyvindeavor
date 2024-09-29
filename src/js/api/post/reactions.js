import { API_SOCIAL_POSTS } from "../../api/constants";
import { headers } from "../headers";

/**
 * @description Reacts to a post by adding an emoji reaction to it. align-center. Note
 * that the emoji is a string that represents the emoji. if users react to same post with same emoji, it will be removed.
 * @param {object} post 
 * @param {string} emoji 
 * @returns {Promise<void>} A promise that resolves when the post has been reacted to.
 * @example
 * // React to a post with a heart emoji
 * const post = { id: 1, title: "Example, post", body: "This is an example post.", reactions: 
 * [{"symbol": "👍","count": 1,"reactors": ["oyvind"]}
] };
 * reactToPost(post, "heart")
 */
export async function reactToPost(post, emoji) {
  const url = `${API_SOCIAL_POSTS}/${post.id}/react/${emoji}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify({}),
  });
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.errors[0].message);
  }
}
