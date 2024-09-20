import { checkIfPageReload } from "../../utilities/checkIfPageReload";
import { getPostFromUrlId } from "../../ui/post/readUrl";
import { loadAndDisplayPost } from "../../ui/post/displayPost";
import { showSpinner, hideSpinner } from "../../utilities/loadingSpinner";
import { setupLikeEventListener } from "../../ui/dom/create/post/events";
import { setupCommentEventListener } from "../../ui/dom/create/post/events";

async function init() {
  // Shows the spinner while waiting for fetch
  showSpinner();
  checkIfPageReload();
  // Get the id from the URL and fetch the data with the id.
  const data = await getPostFromUrlId();
  // Load and display the post in the DOM
  loadAndDisplayPost(data);
  // Event listeners
  setupCommentEventListener(data); // Setup the comment event listener for the post
  setupLikeEventListener(data);
}

init();
