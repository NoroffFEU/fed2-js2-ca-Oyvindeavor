import { onLogout } from "../auth/logout.js";


export function setLogoutListener() {
  const logoutButton = document.querySelector("#logoutBtn");
  logoutButton.addEventListener("click", onLogout);
}
