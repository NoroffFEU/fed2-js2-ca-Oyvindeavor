import { getLoggedInUser } from "../profile/getLoggedInUser";

export async function displayLoggedInUserHome() {
    const user = await getLoggedInUser();
    const username = document.querySelector("#username");
    const avatar = document.querySelector(".avatar-big img");

    username.textContent = user.name.charAt(0).toUpperCase() + user.name.slice(1);
    avatar.src = user.avatar.url;
  }

