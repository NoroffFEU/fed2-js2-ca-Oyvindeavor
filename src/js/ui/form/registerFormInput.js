/**
 * @description - This function is used to get the user's registration data from the form inputs.
 *if banner and avatar are not provided it will not be included in the form data object.
 * @returns {Object} - Returns an object containing the user's registration data from the form inputs.
 * @example
 * const formData = getRegisterFormData();
 * console.log(formData);
 * // Output: { name: "", email: "", password: "", bio: "", banner: { url: "" }, avatar: { url: "" } }
 */
export function getRegisterFormData() {
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const bio = document.querySelector("#bio").value.trim();
  const bannerUrl = document.querySelector("#banner").value.trim();
  const avatarUrl = document.querySelector("#avatar").value.trim();

  const formData = { name, email, password, bio };
  if (bannerUrl) {
    formData.banner = { url: bannerUrl };
  }

  if (avatarUrl) {
    formData.avatar = { url: avatarUrl };
  }

  return formData;
}
