import { onLogin } from "../../ui/auth/login";
import { checkIfPageReload } from "../../utilities/checkIfPageReload";
import { setLoginInputListeners } from "../../ui/form/validation/login";

function init() {
  checkIfPageReload();
  setLoginInputListeners();
  const form = document.forms.login;
  form.addEventListener("submit", onLogin);
}

init();
