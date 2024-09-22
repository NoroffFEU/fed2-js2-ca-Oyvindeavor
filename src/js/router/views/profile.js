import { authGuard } from "../../utilities/authGuard";
import { checkIfPageReload } from "../../utilities/checkIfPageReload";
import { setLogoutListener } from "../../ui/global/logout";

function init() {
  authGuard();
  checkIfPageReload(); // Remove after testing
  setLogoutListener();
}

init();