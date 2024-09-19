// Use Postman, or JavaScript to get your API key
// In Workflow we will learn how to secure this information
export const API_KEY = "c98289b1-6728-4713-aea3-6def28befbd1";

export const API_BASE = "https://v2.api.noroff.dev";

export const API_AUTH = `${API_BASE}/auth`;

export const API_AUTH_LOGIN = `${API_AUTH}/login`;

export const API_AUTH_REGISTER = `${API_AUTH}/register`;

export const API_AUTH_KEY = `${API_AUTH}/create-api-key`;

export const API_SOCIAL = `${API_BASE}/social`;

export const API_SOCIAL_POSTS = `${API_SOCIAL}/posts`;

export const API_SOCIAL_POSTS_FOLLOWING = `${API_SOCIAL_POSTS}/following`;

export const API_SOCIAL_POSTS_SEARCH = `${API_SOCIAL_POSTS}/search`;

export const API_SOCIAL_PROFILES = `${API_SOCIAL}/profiles`;
