import { authGuard } from "../../utilities/authGuard";
import { checkIfPageReload } from "../../utilities/checkIfPageReload";

authGuard();
checkIfPageReload(); // Remove after testing
