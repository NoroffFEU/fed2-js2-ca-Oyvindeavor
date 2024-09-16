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
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const bio = document.querySelector("#bio").value;
  const bannerUrl = document.querySelector("#banner").value;
  const avatarUrl = document.querySelector("#avatar").value;

  const formData = { name, email, password, bio };
  if (bannerUrl) {
    formData.banner = { url: bannerUrl };
  }

  if (avatarUrl) {
    formData.avatar = { url: avatarUrl };
  }

  return formData;
}
