export function clearSinglePost() {
  const feed = document.querySelector(".feed");

  // Remove each direct child element from the feed container
  while (feed.firstChild) {
    feed.removeChild(feed.firstChild);
  }
}
