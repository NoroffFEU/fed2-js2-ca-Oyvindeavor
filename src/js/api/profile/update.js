import { API_SOCIAL_PROFILES } from "../constants";

export async function updateProfile(username, { avatar, banner }) {
  try {
    const response = await fetch(`${API_SOCIAL_PROFILES}/${username}`, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify({ avatar, banner }),
    });
    const data = await response.json();
    console.log(data); // Remove after testing
    return data;
  } catch (error) {
    console.error(error);
  }
}
