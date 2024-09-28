import { searchPosts } from "../../api/post/search";
import { loadAndDisplayPosts } from "../dom/postElements";
import { clearPostsFeed } from "../dom/postElements";
import { readPosts } from "../../api/post/read";

export async function onSearchPosts() {
  const searchInput = document.querySelector("#search");
  const search = searchInput.value;
  if (search.length < 3) {
    const posts = await searchPosts(search);
  clearPostsFeed();
  loadAndDisplayPosts(posts);
    return;
  }
    const posts = await searchPosts(search);
    clearPostsFeed();
    loadAndDisplayPosts(posts);

}

export function setSearchInputListener(functionName) {
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("input", functionName);
}
