import { API_AUTH_LOGIN } from "../constants";
import { headers } from "../headers";
import { displayErrorMessage } from "../../utilities/errorMessage";

/**
 * @description Sends a POST request to the API to log in a user with the provided email and password.
 * This function handles user authentication by submitting the credentials to the specified API.
 * If the credentials are valid, the API responds with user data and a token, which can be used
 * for session management. If the credentials are invalid or any other error occurs, the function
 * throws an error with a detailed message, which can be caught and handled by the calling function.
 *
 * @param {Object} credentials - The user credentials for logging in.
 * @param {string} credentials.email - The email address of the user.
 * @param {string} credentials.password - The password of the user.
 * @returns {Promise<Object>} - A promise that resolves to the response data containing user information and a token if the login is successful.
 * @throws {Error} - Throws an error if the login request fails, with a message indicating the reason for the failure.
 *
 * @example
 * import { login } from "./api/auth/login";
 *
 * const email = document.querySelector("#email").value;
 * const password = document.querySelector("#password").value;
 *
 * try {
 *   const response = await login({ email, password });
 *   console.log("Login successful:", response.data);
 *   // Handle successful login, e.g., store token and user data
 * } catch (error) {
 *   console.error("Login failed:", error.message);
 *   // Handle login failure, e.g., show error message to the user
 * }
 */

export async function login({ email, password }) {
  try {
    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData?.errors?.[0]?.message || `Error ${response.status}: ${response.statusText}`;
      displayErrorMessage("loginError", errorMessage);
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
