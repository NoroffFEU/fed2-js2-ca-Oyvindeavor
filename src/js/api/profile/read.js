import { API_SOCIAL_PROFILES } from "../constants";
import { headers } from "../headers";

/**
 * Fetches the profile data for a given username and updates the browser's URL.
 *
 * @param {string} username - The username of the profile to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the profile data.
 *
 * @example
 * import { readProfile } from './profileService';
 *
 * async function loadProfile(name) {
 *   try {
 *     const profileData = await readProfile(name);
 *     console.log('Profile Data:', profileData);
 *   } catch (error) {
 *     console.error('Failed to load profile:', error);
 *   }
 * }
 *
 * loadProfile();
 *
 * returns: "Profile Data: { name: 'John Doe', ... }"
 */
export async function readProfile(username) {
  try {
    const response = await fetch(`${API_SOCIAL_PROFILES}/${username}`, {
      method: "GET",
      headers: headers(),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Fetches a list of profiles with pagination support.
 *
 * @param {number} limit - The number of profiles to fetch per page.
 * @param {number} page - The page number to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the list of profiles.
 *
 * @example
 * import { readProfiles } from './profile/read.js';
 *
 * async function loadProfiles(limit, page) {
 *   try {
 *     // Fetch profiles with a limit of 10 profiles per page, on page 1
 *     const profiles = await readProfiles(limit, page);
 *     console.log('Profiles:', profiles);
 *   } catch (error) {
 *     console.error('Failed to load profiles:', error);
 *   }
 * }
 *
 * // Example usage
 * loadProfiles(10, 1);
 * // Returns the first 10 profiles on page 1
 * returns: "Profiles: [{ name: 'John Doe', ... }, { name: 'Jane Doe', ... }, ...]"
 */
export async function readProfiles(limit, page) {
  try {
    const response = await fetch(`${API_SOCIAL_PROFILES}?limit=${limit}&page=${page}`, {
      method: "GET",
      headers: headers(),
    });
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
}
