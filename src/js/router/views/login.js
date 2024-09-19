import { onLogin } from "../../ui/auth/login";
import { checkIfPageReload } from "../../utilities/checkIfPageReload";

function init() {
  checkIfPageReload();
  const form = document.forms.login;
  form.addEventListener("submit", onLogin);
}

init();
