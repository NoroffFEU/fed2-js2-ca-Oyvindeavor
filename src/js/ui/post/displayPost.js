import { clearSinglePost } from "../dom/clear/clearSinglePost.js";
import { appendSinglePost } from "../dom/create/post/postSingleElements.js";
import { clearComments } from "../dom/clear/clearComments.js";
import { appendComments } from "../dom/create/post/postSingleElements.js";

// Clears the existing post and comments, displays new ones.
// Use this for single post view
export function loadAndDisplayPost(post) {
  // Clear the single post and comments
  clearSinglePost();
  // Creates and appends the single post and comments associated with the post
  appendSinglePost(post);
  clearComments();
  appendComments(post);

}
