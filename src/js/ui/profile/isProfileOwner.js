import { readUrlName } from "../../ui/profile/readUrlName.js";
import { getLoggedInUser } from "../../ui/profile/getLoggedInUser.js";

/**
 * Checks if the logged-in user is the owner of the profile.
 * Compares the username in the URL with the username of the logged-in user
 * stored in localStorage.
 *
 * @returns {Promise<boolean>} - A promise that resolves to true if the logged-in user is the owner of the profile, otherwise false.
 *
 * @example
 * // Example usage:
 * const isOwner = await isProfileOwner();
 * console.log(isOwner); // true
 *
 * // Example usage in an if statement
 * const editProfileButton = document.querySelector(".edit-button");
 * if (isOwner) {
 *   editProfileButton.style.display = "block";
 * } else {
 *   editProfileButton.style.display = "none";
 * }
 * // The edit profile button is displayed if the logged-in user is the owner.
 */
export async function isProfileOwner() {
    try {
      const name = readUrlName(); 
      const loggedInUser = await getLoggedInUser();
      return loggedInUser && name === loggedInUser.name;
      
    } catch (error) {
      console.error("Error checking profile ownership:", error);
      return false;
    }
  }