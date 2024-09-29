import { getPostFromUrlId } from "../../utilities/readUrl";
import { loadAndDisplayPost } from "../../ui/post/displayPost";
import { showSpinner} from "../../utilities/loadingSpinner";
import {setupPostEventListeners} from "../../ui/events/post";

async function init() {
  showSpinner();
  const data = await getPostFromUrlId();
  loadAndDisplayPost(data);
  setupPostEventListeners(data);
}

init();
