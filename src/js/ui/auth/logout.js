/**
 * @description Logout user by removing the authentication token and user information from local storage. Redirects the user to the login page.
 * @example
 * const logoutButton = document.querySelector("#logout");
 * logoutButton.addEventListener("click", onLogout);
 */

export function onLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/auth/login/";
}
