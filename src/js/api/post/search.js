import { API_SOCIAL_POSTS_SEARCH } from "../constants";
import { headers } from "../headers";

/**
 * @description Searches the api for posts based on the search query
 * @param {string} search
 * @param {number} limit
 * @param {number} page
 * @param {string} tag
 * @returns {Promise<Object>} - A promise that resolves to the response data if the search request is successful.
 * @example
 * import { searchPosts } from "./api/post/search";
 * const searchInput = document.querySelector("#search-input");
 * searchInput.addEventListener("input", async () => {
 * try {
 * const posts = await searchPosts(searchInput.value);
 * console.log("Search results:", posts);
 * } catch (error) {
 * console.error("Failed to search posts:", error);
 * }
 * });
 *
 */
export async function searchPosts(search, limit = 12, page = 1, tag = []) {
  const url = `${API_SOCIAL_POSTS_SEARCH}?&_tag=${tag}&q=${search}&limit=${limit}&page=${page}&_author=true`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers(),
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(data.errors[0].message);
    }
    console.log("searched posts data: ", responseData.data);
    return responseData.data;
  } catch (error) {
    console.error("Error fetching posts", error);
    console.log("Error fetching posts", error);
  }
}
