import { headers } from "../headers";
import { API_SOCIAL_POSTS } from "../constants";
import { API_SOCIAL_PROFILES } from "../constants";

/**
/**
 * @description Fetches a post from the API by its ID.
 * @param {number} id - The ID of the post to fetch.
 * @returns {Promise<object|null>} - A promise that resolves to the post data if successful, or null if there was an error.
 *
 * @example
 * // Example usage
 * const post = await readPost(273);
 * console.log(post);
 * {"id": 273, "title": "Hello, world!", "body": "lorem ipsum..."}
 * ...
*/
export async function readPost(id) {
  const url = `${API_SOCIAL_POSTS}/${id}?_author=true&_comments=true&_reactions=true`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers(),
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(data.errors[0].message);
    }
    console.log("Post data", responseData.data);
    return responseData.data;
  } catch (error) {
    console.error("Error fetching post", error);
    return null;
  }
}

/**
 * @description Fetches a list of posts from the API. Fetches a list of posts with optional pagination and filtering by tag.
 * @param {number} [limit=12] - The number of posts to fetch per page. Defaults to 12.
 * @param {number} [page=1] - The page number to fetch. Defaults to 1.
 * @param {string} [tag] - An optional tag to filter the posts by.
 * @returns {Promise<Object>} A promise that resolves to the fetched posts data.
 * @throws {Error} Throws an error if the fetch request fails or the response is not ok.
 *  * @example
 * // Fetch the first page of posts with the default limit of 12 posts per page
 * readPosts()
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * @example
 * // Fetch the second page of posts with 10 posts per page
 * readPosts(10, 2)
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * @example
 * // Fetch the first page of posts filtered by the 'tech' tag with 15 posts per page
 * readPosts(15, 1, 'tech')
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 */
export async function readPosts(limit = 12, page = 1, tag) {
  const url = `${API_SOCIAL_POSTS}?_tag=${tag}&limit=${limit}&page=${page}&_author=true`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers(),
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(data.errors[0].message);
    }
    console.log("Posts data", responseData.data);
    return responseData.data;
  } catch (error) {
    console.error("Error fetching posts", error);
    console.log("Error fetching posts", error);
  }
}

/**
 * @description Fetches a list of posts from the API by a specific user. Fetches a list of posts with optional pagination and filtering by tag.
 * @param {string} username - The username of the user.
 * @param {number} [limit=12] - The maximum number of posts to fetch (default is 12).
 * @param {number} [page=1] - The page number of the posts to fetch (default is 1).
 * @param {string} tag - The tag to filter the posts by.
 * @returns {Promise<object|null>} - A promise that resolves to the fetched posts data or null if there was an error.
 */
export async function readPostsByUser(username, limit = 12, page = 1, tag) {
  const url = `${API_SOCIAL_PROFILES}/${username}/posts?limit=${limit}&page=${page}${tag ? `&tag=${encodeURIComponent(tag)}` : ""}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers(),
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(data.errors[0].message);
    }
    console.log("Posts data", responseData.data);
    return responseData.data;
  } catch (error) {
    console.error("Error fetching posts", error);
    return null;
  }
}
