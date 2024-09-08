import { headers } from "../headers";
import { API_AUTH_REGISTER } from "../constants";

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
