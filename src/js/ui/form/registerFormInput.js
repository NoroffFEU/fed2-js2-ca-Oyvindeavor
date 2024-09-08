/**
 * @description - This function is used to get the user's registration data from the form inputs.
 * @returns {Object} - Returns an object containing the user's registration data from the form inputs.
 * @example
 * const formData = getRegisterFormData();
 * console.log(formData);
 * // Output: { name: "", email: "", password: "", bio: "", banner: { url: "" }, avatar: { url: "" } }
 */
export function getRegisterFormData() {
  return {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    bio: document.querySelector("#bio").value,
    banner: { url: document.querySelector("#banner").value },
    avatar: { url: document.querySelector("#avatar").value },
  };
}
