export function getLoggedInUserName() {
    const username = JSON.parse(localStorage.getItem("user"));
    console.log(username.name);
    return username.name;
}