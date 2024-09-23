import { readUrlName } from "../../ui/profile/readUrlName.js";
import { getLoggedInUser } from "../../ui/profile/getLoggedInUser.js";

/**
 * @description Checks if the logged in user is the owner of the profile. 
 * use this function to determine if the logged in user is the owner of the profile.
 * it does this by comparing the username in the URL with the username of the logged in user,
 * in localstorage.
 * @returns {boolean} - Returns true if the logged in user is the owner of the profile, otherwise false.
 * @returns {Promise<boolean>} - Returns a promise that resolves to a boolean value. 
 * @example
 * // Example usage:
 * const isOwner = await isProfileOwner();
 * console.log(isOwner);
 * // Output: true
 * // example usage in an if statement
 * const editProfileButton = document.querySelector(".edit-button");
 * if (isOwner) {
 *  editProfileButton.style.display = "block";
 * } else {
 * editProfileButton.style.display = "none";
 * } 
 * // Output: The edit profile button is displayed if the logged in user is the owner
 */
export async function isProfileOwner() {
    const name = readUrlName();
    // get the logged in user from local storage
    const loggedInUser = await getLoggedInUser();
    console.log(loggedInUser); // remove this later
    if (name === loggedInUser.name ) {
      return true;
    } else {
      return false;
    }
  }
