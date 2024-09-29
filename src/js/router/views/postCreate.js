import { authGuard } from "../../utilities/authGuard";
import { setupPostCreateEventListeners } from "../../ui/events/postCreate";

function init() {
  authGuard();
  setupPostCreateEventListeners();
}

init();
