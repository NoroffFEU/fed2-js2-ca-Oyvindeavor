import { authGuard } from "../../utilities/authGuard";
import { checkIfPageReload } from "../../utilities/checkIfPageReload";

function init() {
  authGuard();
  checkIfPageReload(); // Remove after testing
}

init();
