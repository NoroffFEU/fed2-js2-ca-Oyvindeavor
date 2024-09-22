import { onRegister } from "../../ui/auth/register";
import { checkIfPageReload } from "../../utilities/checkIfPageReload";
import { setFormInputListeners } from "../../ui/form/validation/register";

function init() {
  checkIfPageReload(); // Remove after testing
  setFormInputListeners();
  const form = document.forms.register;
  form.addEventListener("submit", onRegister);
}

init();
