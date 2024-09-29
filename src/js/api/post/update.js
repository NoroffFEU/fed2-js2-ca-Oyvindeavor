import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";
import { displayErrorMessage } from "../../utilities/errorMessage";

export async function updatePost(id, { title, body, tags, media }) {
  try {
    const bodyData = { title, body, tags };
    if (media) {
      bodyData.media = { url: media };
    }

    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify(bodyData),
    });
    const responseData = await response.json();
    if (!response.ok) {
      displayErrorMessage("error-message-fetch", responseData.errors[0].message);
      throw new Error(responseData.errors[0].message);
    }
  } catch (error) {
    console.error("error updating post ", error);
  }
}
