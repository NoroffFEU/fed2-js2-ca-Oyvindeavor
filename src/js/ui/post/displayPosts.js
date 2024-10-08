import { clearPostsFeed } from "../dom/clear/clearPosts.js";
import { appendPostToFeed } from "../dom/create/posts/postsElements.js";

// Clears the posts feed and appends the posts to the feed
// Use this for the main feed
export function loadAndDisplayPosts(posts) {
  clearPostsFeed();
  appendPostToFeed(posts);
}
