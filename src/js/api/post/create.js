import { headers } from "../headers";
import { API_SOCIAL_POSTS } from "../constants";
/**
 * Creates a new post by sending the provided data to the API.
 * This function constructs a
 * including title, body, tags, and media, and sends a POST request
 * to the API endpoint. Only non-empty values are included in the request.
 *
 * @param {Object} params - The post data.
 * @param {string} params.title - The title of the post (Required).
 * @param {string} [params.body] - The body content of the post (Required).
 * @param {Array<string>} [params.tags] - An array of tags for the post (optional).
 * @param {Object, url} [params.media] - The media object containing a URL and alt text (optional).
 *
 * @returns {Promise<Object>} The created post data from the API.
 * @throws {Error} If the post creation fails.
 *
 * @example
 * // Example usage:
 *
 * const postData = {
 *   title: "My First Post",
 *   body: "This is the content of my first post.",
 *   tags: ["introduction", "firstPost"],
 *   media: { url: "https://example.com/image.jpg", alt: "An example image" }
 * };
 *
 * createPost(postData)
 *   try {
 *    const newPost = await createPost(postData);
 *   console.log("New post created:", newPost);
 * } catch (error) {
 *  console.error("Error creating post:", error.message);
 * }
 */
export async function createPost({ title, body, tags, media }) {
  try {
    const deconstruct = {
      title,
      body: body || undefined, // Only include if body is not null or empty
      tags: tags.length > 0 ? tags : undefined, // Only include if tags array is not empty
      media: media || undefined, // Only include if media object exists
    };

    const response = await fetch(`${API_SOCIAL_POSTS}`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(deconstruct),
    });

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    const responsedata = await response.json();
    return responsedata.data;
  } catch (error) {
    console.error("API Error:", error);
  }
}
