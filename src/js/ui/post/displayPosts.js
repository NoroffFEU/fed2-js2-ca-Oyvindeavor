import { clearPostsFeed } from "../dom/clear/clearPosts.js";
import { appendPostToFeed } from "../dom/create/postsElements.js";

// Clears the posts feed and appends the posts to the feed
export function loadAndDisplayPosts(posts) {
  clearPostsFeed();
  appendPostToFeed(posts);
}
