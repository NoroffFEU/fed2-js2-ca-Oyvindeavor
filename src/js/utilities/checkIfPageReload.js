/**
 * Checks if the current page load was a result of a reload action.
 * To test if im preventing the default events from happening.
 * 
 * @returns {void}
 * 
 * @example
 * import { checkIfPageReload } from './utils/checkPageReload.js';
 * 
 * // Call the function to check if the page was reloaded
 * checkIfPageReload();
 * 
 * // Output will be logged in the console:
 * // "The page was reloaded." if the page was refreshed.
 * // "The page was not reloaded." if it was a fresh load or navigated to directly.
 */
export function checkIfPageReload() {
    const [navigation] = performance.getEntriesByType('navigation');
    if (navigation.type === 'reload') {
        console.log('The page was reloaded.');
    } else {
        console.log('The page was not reloaded.');
    }
}