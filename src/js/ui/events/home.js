import { setLogoutListener } from "../global/logout";
import { setupSortListenerHome } from "../sort/sort";
import { initializeHomeSearch } from "../search/search";
import { getLoggedInUserName } from "../profile/getLoggedInUser";


export async function setupEventListenersHome() {
    setLogoutListener();
    await setupSortListenerHome();
    await initializeHomeSearch();
    setMyProfileEventListener();
  }


function setMyProfileEventListener() {
    const userName = getLoggedInUserName();
    const myProfileButton = document.querySelector("#myProfileButton");
    myProfileButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = `/profile/?username=${userName}`;
    });
  }