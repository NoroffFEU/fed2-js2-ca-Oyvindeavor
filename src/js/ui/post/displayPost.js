import { clearSinglePost } from "../dom/clear/clearSinglePost.js";
import { appendSinglePost } from "../dom/create/postSingleElements.js";
import { clearComments } from "../dom/clear/clearComments.js";
import { appendComments } from "../dom/create/postSingleElements.js";

// Clears the single post and comments, then appends the single post and comments associated with the post
export function loadAndDisplayPost(post) {
  // Clear the single post and comments
  clearSinglePost();
  // Creates and appends the single post and comments associated with the post
  appendSinglePost(post);
  clearComments();
  appendComments(post);
}
