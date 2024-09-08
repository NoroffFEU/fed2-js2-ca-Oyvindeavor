import { API_KEY } from "./constants";

export function headers() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  return headers;
}
