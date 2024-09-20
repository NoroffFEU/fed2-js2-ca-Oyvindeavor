import { reactToPost } from "../../../../api/post/reactions";
import { commentOnPost } from "../../../../api/post/comment";
import { getPostFromUrlId } from "../../../post/readUrl";

export async function setupLikeEventListener(data) {
    const emojiBtn = document.querySelector(".emoji-btn");
    const emojiCount = document.querySelector(".emoji-count");
  
    emojiBtn.addEventListener("click", async () => {
      console.log("Emoji button clicked");
  
      try {
        // Send the reaction to the server
        await reactToPost(data, "👍");
  
        // Fetch the updated post data after the reaction
        const updatedData = await getPostFromUrlId(data.id); // Assuming `data.id` is the post's ID
  
        // Toggle the 'active' class to indicate the user has reacted
        emojiBtn.classList.toggle("active");
  
        // Update the count with the latest reaction data
        emojiCount.textContent = updatedData._count.reactions;
  
        console.log("Updated reaction count:", updatedData._count.reactions);
      } catch (error) {
        console.error("Error updating reaction:", error);
      }
    });
  }
  

  export async function setupCommentEventListener(data) {
    const commentForm = document.querySelector(".add-comment-form");
  
    commentForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      
      // Get the input from the comment field
      const commentInput = document.querySelector(".comment-input").value.trim();
  
      if (commentInput === "") {
        console.log("No comment entered");
        return;
      }
  
      try {
        // Post the comment to the server
        await commentOnPost(data, commentInput);
  
        // Fetch the updated post data to get the latest comments
        const updatedData = await getPostFromUrlId(data.id); // Assuming `data.id` is the post's ID
  
        // Clear the existing comments
        clearComments();
  
        // Append the updated list of comments
        appendComments(updatedData);
  
        // Clear the comment input field
        document.querySelector(".comment-input").value = "";
  
        console.log("Comment successfully posted");
      } catch (error) {
        console.error("Error posting comment:", error);
      }
    });
  }
  