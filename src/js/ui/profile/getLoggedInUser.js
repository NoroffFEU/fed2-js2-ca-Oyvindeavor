import { readProfile } from "../../api/profile/read";

/**
 * @description Gets the username of the logged in user from local storage.
 * @returns {string} - The username of the logged in user.
 * @example
 * // Example usage:
 * const username = getLoggedInUserName();
 * console.log(username);
 * // Output:
 * "JohnDoe"
 */
export function getLoggedInUserName() {
  const username = JSON.parse(localStorage.getItem("user"));
  return username.name;
}

/**
 * @description Gets the logged in user's profile data from the API.
 * @returns {Promise<object>} - A promise that resolves to the logged in user's profile data.
 * @example
 * // Example usage:
 * const getUser = await getLoggedInUser();
 * console.log(getUser);
 * // Output:
 * {username: "test", avatar: "https://example.com/image.jpg", banner: "https://example.com/banner.jpg", bio: "This is a test bio."}
 */
export async function getLoggedInUser() {
  const username = getLoggedInUserName();
  const profile = await readProfile(username);
  return profile.data;
}
