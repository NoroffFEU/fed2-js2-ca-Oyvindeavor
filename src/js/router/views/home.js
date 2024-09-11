import { authGuard } from "../../utilities/authGuard";
import { setLogoutListener } from "../../ui/global/logout";
import { checkIfPageReload } from "../../utilities/checkIfPageReload";

authGuard();
setLogoutListener();
checkIfPageReload();// Remove after testing