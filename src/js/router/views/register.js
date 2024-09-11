import { onRegister } from "../../ui/auth/register";
import { checkIfPageReload } from "../../utilities/checkIfPageReload";

checkIfPageReload(); // Remove after testing
const form = document.forms.register;

form.addEventListener("submit", onRegister);



