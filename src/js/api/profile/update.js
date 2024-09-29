import { API_SOCIAL_PROFILES } from "../constants";
import { headers } from "../headers";

export async function updateProfile(username, { avatar, banner, bio }) {
  try {
    const deconstruct = { bio };
    if (avatar) {
      deconstruct.avatar = { url: avatar };
    }
    if (banner) {
      deconstruct.banner = { url: banner };
    }
    const response = await fetch(`${API_SOCIAL_PROFILES}/${username}`, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify(deconstruct),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}