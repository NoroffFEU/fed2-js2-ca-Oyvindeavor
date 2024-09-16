import { headers } from "../headers";
import { API_AUTH_REGISTER } from "../constants";

/**
 * @description Sends a POST request to the API to register a new user with the provided params.
 * @param {string}name - The name of the user.
 * @param {string}email - The email address of the user.
 * @param {string}password - The password of the user.
 * @param {string}bio - The bio of the user.
 * @param {url}banner - The banner of the user. 
 * @returns {Promise<Object>} - A promise that resolves to the response data containing user information and a token if the registration is successful.
 * @throws {Error} - Throws an error if the registration request fails, with a message indicating the reason for the failure.
 * @example
 * import { register } from "./api/auth/register";
 * 
 * function handleRegister() {
 * const name = document.querySelector("#name").value;
 * const email = document.querySelector("#email").value;
 * const password = document.querySelector("#password").value;
 * const bio = document.querySelector("#bio").value;
 * const banner = document.querySelector("#banner").value;
 * 
const response = await register({ name, email, password, bio, banner });
console.log("Registration successful:", response.data);
 }
 * 
 */
export async function register({ name, email, password, bio, banner, avatar }) {
  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ name, email, password, bio, banner, avatar }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData?.errors?.[0]?.message || `Error ${response.status}: ${response.statusText}`;
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error("Registration request failed:", error.message);
    throw error;
  }
}
