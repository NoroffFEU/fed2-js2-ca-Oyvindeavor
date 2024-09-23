import { API_SOCIAL_PROFILES } from "../constants";
import { headers } from "../headers";
import {displayErrorMessage} from "../../ui/form/validation/errorMessage";

export async function updateProfile(username, { avatar, banner, bio }) {
  try {
    const deconstruct = {
      avatar: { url: avatar },
      banner: { url: banner },
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
    displayErrorMessage("#error-message-profile","Failed to update profile");
    console.error(error);
  }
}
