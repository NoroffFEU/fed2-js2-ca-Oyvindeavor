import { onLogin } from "../../ui/auth/login";
import { checkIfPageReload } from "../../utilities/checkIfPageReload";

checkIfPageReload(); // Remove after testing

const form = document.forms.login;

form.addEventListener("submit", onLogin);
