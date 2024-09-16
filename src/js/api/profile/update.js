import { API_SOCIAL_PROFILES } from "../constants";
import { headers } from "../headers";

export async function updateProfile(username, { avatar, banner, bio }) {
  try {
    const deconstruct = {
      avatar: avatar.url,
      banner: banner.url,
      bio,
    };
    const response = await fetch(`${API_SOCIAL_PROFILES}/${username}`, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify(deconstruct),
    });
    console.log(JSON.stringify(deconstruct)); // Remove after
    const data = await response.json();
    console.log(data); // Remove after testing
    return data;
  } catch (error) {
    console.error(error);
  }
}
