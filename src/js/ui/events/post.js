import { setupLikeEventListener } from "../dom/create/post/events";
import { setupCommentEventListener } from "../dom/create/post/events";

export function setupPostEventListeners(data) {
  setupLikeEventListener(data);
  setupCommentEventListener(data);
}
