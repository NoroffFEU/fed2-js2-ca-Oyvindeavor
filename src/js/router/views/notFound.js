import { checkIfPageReload } from "../../utilities/checkIfPageReload";

function init() {
  checkIfPageReload();
  alert("Page cannot be found in /src/views");
}

init();
