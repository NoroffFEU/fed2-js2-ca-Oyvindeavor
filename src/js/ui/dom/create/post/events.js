import { reactToPost } from "../../../../api/post/reactions";
import { commentOnPost } from "../../../../api/post/comment";
import { getPostFromUrlId } from "../../../../utilities/readUrl";
import {appendComments} from "../../create/post/postSingleElements";
import {clearComments} from "../../clear/clearComments";


export async function setupLikeEventListener(data) {
  const emojiBtn = document.querySelector(".emoji-btn");
  const emojiCount = document.querySelector(".emoji-count");
  emojiBtn.addEventListener("click", async () => {
    try {
      await reactToPost(data, "👍");
      const updatedData = await getPostFromUrlId(data.id);
      emojiBtn.classList.toggle("active");
      emojiCount.textContent = updatedData._count.reactions;
    } catch (error) {
      console.error("Error updating reaction:", error);
    }
  });
}

export async function setupCommentEventListener(data) {
  const commentForm = document.querySelector(".add-comment-form");
  commentForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const commentInput = document.querySelector(".comment-input").value.trim();
    if (commentInput === "") {
      return;
    }

    try {
      await commentOnPost(data, commentInput);
      const updatedData = await getPostFromUrlId(data.id);
      clearComments();
      appendComments(updatedData);
      document.querySelector(".comment-input").value = "";
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  });
}
