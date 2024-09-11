import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";
import { checkIfPageReload } from "../../utilities/checkIfPageReload";

authGuard();
checkIfPageReload(); // Remove after testing

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);


