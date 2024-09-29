import { onRegister } from "../auth/register";
import { setFormInputListeners } from "../form/validation/register";

export function setupRegisterEventListeners() {
  setFormInputListeners();
  const form = document.forms.register;
  form.addEventListener("submit", onRegister);
}
