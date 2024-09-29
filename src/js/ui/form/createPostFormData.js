/**
 * @description - This function retrieves the data from the create post form inputs.
 * If no media is provided, the media object will be null.
 * If no tags are selected, the tags array will be empty.
 * NOTE: Ive added a custom tag to retrieve only posts by me, remove this if you want to show all posts.
 * @returns {Object} - Returns an object containing the post data from the form inputs.
 * @example
 * const formData = getCreatePostFormData();
 * console.log(formData);
 * // Output: { title: "", body: "", tags: [], media: { url: "" } }
 */
export function getCreatePostFormData() {
  const form = document.getElementById("createPostForm");

  const title = form.querySelector("#postTitle").value.trim();
  const body = form.querySelector("#postContent").value.trim() || null;

  const mediaUrl = form.querySelector("#postImage").value.trim();
  const mediaAlt = "Post image";

  const media = mediaUrl ? { url: mediaUrl, alt: mediaAlt } : null;

  // Get tags values
  const tags = Array.from(form.querySelectorAll('input[name="tags"]:checked')).map((checkbox) => checkbox.value);

  // Custom tag for all posts to retrieve only posts by me later
  tags.push("øyvind"); // <---- Remove this if you want to show all posts

  return { title, body, tags, media };
}
