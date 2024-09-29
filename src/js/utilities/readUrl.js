import { readPost } from "../api/post/read";
import { readPostsByUser } from "../api/post/read";

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
// Reads the ID parameter from the URL returns it.
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
// Reads the ID of the post from the URL and fetches the post data
export async function getPostFromUrlId() {
  const getPostId = readUrlId();
  const post = await readPost(getPostId);
  return post;
}

export async function getPostFromUrlName() {
  const getPostName = readUrlName();
  const post = await readPostsByUser(getPostName,12, 1, "øyvind");
  console.log(post);
  return post;
}

// Reads the username parameter from the URL and returns it.
export function readUrlName() {
  const url = new URL(window.location.href);
  const name = url.searchParams.get("username");
  return name;
}
