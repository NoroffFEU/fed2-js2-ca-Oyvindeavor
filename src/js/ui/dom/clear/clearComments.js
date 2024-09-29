
// Targets the comments section and removes all direct child elements from it (i.e. all comments)
export function clearComments() {
  const commentsSection = document.querySelector(".comments");

  // Remove each direct child element from the comments section
  while (commentsSection.firstChild) {
    commentsSection.removeChild(commentsSection.firstChild);
  } 
}
