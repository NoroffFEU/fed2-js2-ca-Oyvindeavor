import { readPosts } from "../../api/post/read.js";
import { searchPosts } from "../../api/post/search.js";
import { loadAndDisplayPosts } from "../post/displayPosts.js";
import { showSpinner, hideSpinner } from "../../utilities/loadingSpinner.js";

export async function initializeHomeSearch() {
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("input", () => handleSearch(searchInput));
}

async function handleSearch(searchInput) {
  showSpinner();

  if (!searchInput.value.trim()) {
    await handleEmptySearch();
  } else {
    await handleNonEmptySearch(searchInput.value);
  }

  hideSpinner();
}

async function handleEmptySearch() {
  try {
    const initialPosts = await readPosts(12, 1, "øyvind");
    loadAndDisplayPosts(initialPosts);
  } catch (error) {
    console.error("Failed to load initial posts:", error);
  }
}

async function handleNonEmptySearch(query) {
  try {
    const posts = await searchPosts(query, 12, 1, "øyvind");
    loadAndDisplayPosts(posts);
  } catch (error) {
    console.error("Failed to search posts:", error);
  }
}
