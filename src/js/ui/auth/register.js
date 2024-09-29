import { register } from "../../api/auth/register";
import { getRegisterFormData } from "../../ui/form/registerFormInput";

export async function onRegister(event) {
  event.preventDefault();
  const formData = getRegisterFormData();

  try {
    await register(formData);
    alert("Registration successful. Please log in to continue.");
    window.location.href = "/auth/login/";
  } catch (error) {
    console.error("Registration failed:", error.message);
  }
}
