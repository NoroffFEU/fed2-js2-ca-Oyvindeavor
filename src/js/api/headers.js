import { API_KEY } from "./constants";

/**
 * @description Creates a new Headers object with the necessary headers for making requests to the API.
 * @returns {Headers} - A Headers object containing the necessary headers for making requests to the API.
 * @example 
 * method: "POST",
 * headers: headers(),
 * 
 */
export function headers() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  const token = localStorage.getItem("token");
  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  return headers;
}
