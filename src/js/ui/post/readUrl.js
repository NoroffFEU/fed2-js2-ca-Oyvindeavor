import { readPost } from "../../api/post/read";

/**
 * @description Reads the ID of the url from the window location.
 * @returns {string} - The ID of the post from the URL.
 * @example
 * // Returns the ID of the post from the URL
 * const getPostId = readUrlId();
 * console.log(getPostId);
 * // Output: 349
 *
 */
export function readUrlId() {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");
  return id;
}

/**
 * @description Fetches a post from the API using the post ID from the URL
 * @returns {Promise<Object>} - A promise that resolves to the fetched post data.
 * @description This function reads the post ID from the URL, fetches the post data using the `readPost` function, and returns the post data.
 * @example
 * // Fetches a post from the API using the post ID from the URL
 * const data = await getPostFromUrlId();
 * console.log(data);
 * // Output: { id: 349, title: "Example Post", body: "This is an example post." }
 */
export async function getPostFromUrlId() {
  const getPostId = readUrlId();
  const post = await readPost(getPostId);
  return post;
}
