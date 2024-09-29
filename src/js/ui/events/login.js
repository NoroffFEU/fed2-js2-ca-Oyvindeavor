import {setLoginInputListeners} from "../form/validation/login";
import { onLogin } from "../auth/login";

export function setUpLoginEventListeners() {
  setLoginInputListeners();
  const form = document.forms.login;
  form.addEventListener("submit", onLogin);
}