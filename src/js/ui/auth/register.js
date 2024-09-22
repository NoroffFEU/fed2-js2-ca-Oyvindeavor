import { register } from "../../api/auth/register";
import { getRegisterFormData } from "../../ui/form/registerFormInput";

export async function onRegister(event) {
  event.preventDefault();
  const formData = getRegisterFormData();

  try {
    const response = await register(formData);
    console.log("Registration successful:", response); // Remove after testing
    alert("Registration successful. Please log in to continue.");
    window.location.href = "/auth/login/";
  } catch (error) {
    console.error("Registration failed:", error.message);
  }
}
