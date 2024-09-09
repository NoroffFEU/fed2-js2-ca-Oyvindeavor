import { login } from "../../api/auth/login";

/**
 * Handles the form submit event for user login.
 *
 * @description This function is triggered when the login form is submitted. It prevents the default
 * form submission behavior, retrieves the user's email and password from the form inputs,
 * and attempts to log in the user by calling the `login` function. Upon a successful login,
 * it stores the authentication token and user information in local storage, redirects the user
 * to the home page, and logs a success message. If an error occurs during the login process,
 * it catches the error, logs the error message, and displays an alert with the error message
 * to inform the user of the failure.
 *
 * @param {Event} event - The form submit event triggered when the user attempts to log in.
 *
 * @example
 * document.forms.login.addEventListener("submit", onLogin);
 *
 * * // HTML structure for form
 * // <form name="login">
 * //   <input id="email" type="email" name="email" required placeholder="Email">
 * //   <input id="password" type="password" name="password" required placeholder="Password">
 * //   <button type="submit">Login</button>
 * // </form>
 */

export async function onLogin(event) {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  try {
    const response = await login({ email, password });
    localStorage.setItem("token", response.data.accessToken);
    localStorage.setItem("user", JSON.stringify(response.data));
    window.location.href = "/";
    console.log("Login successful:", response.data);
  } catch (error) {
    console.error("Login error:", error.message);
    alert(`Login failed: ${error.message}`);
  }
}
