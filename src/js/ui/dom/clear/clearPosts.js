/**
 * Clears all posts from the feed.
 */
export function clearPostsFeed() {
  const postContents = document.querySelectorAll(".feed .post-content");
  postContents.forEach((postContent) => postContent.remove());
}
