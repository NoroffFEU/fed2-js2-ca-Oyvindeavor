export function authGuard() {
  if (!localStorage.token) {
    window.location.href = "/auth/login/";
    alert("You must be logged in to view this page");
  }
}
