/**
 * Appends a single post to the feed.
 * @param {Object} post - The post data object.
 */
export function appendSinglePost(post) {
  const feed = document.querySelector(".feed");

  // Create the post content structure

  // Header section (Avatar and username)
  const header = document.createElement("header");
  header.className = "avatar-small";

  const avatarLink = document.createElement("a");
  avatarLink.href = "/profile/";
  const url = new URL(window.location.origin + "/profile/");
  url.searchParams.set("username", post.author.name);
  avatarLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.history.pushState({}, "", url.toString());
    window.location.href = url.toString();
  });

  const avatarImg = document.createElement("img");
  avatarImg.className = "avatar-img";
  avatarImg.alt = "User Avatar";
  avatarImg.src = post.author.avatar.url;

  const username = document.createElement("h1");
  username.className = "username";
  username.textContent = post.author.name.charAt(0).toUpperCase() + post.author.name.slice(1);

  avatarLink.appendChild(avatarImg);
  avatarLink.appendChild(username);
  header.appendChild(avatarLink);

  // Time container for post date
  const timeContainer = document.createElement("div");
  timeContainer.className = "time-container";
  const postDate = document.createElement("time");
  postDate.className = "post-date";
  postDate.setAttribute("datetime", post.created);
  postDate.textContent = `Posted on: ${new Date(post.created).toDateString()}`;

  timeContainer.appendChild(postDate);
  header.appendChild(timeContainer);

  // Section for post content
  const postContentContainer = document.createElement("section");
  postContentContainer.className = "post-content-container";

  const postTitle = document.createElement("h2");
  postTitle.className = "post-title";
  postTitle.textContent = post.title;

  const postBody = document.createElement("p");
  postBody.className = "post-body";
  postBody.textContent = post.body;

  const postImage = document.createElement("img");
  if (post.media) {
    postImage.src = post.media.url;
    postImage.alt = "Post Image";
    postImage.className = "post-img"; // Make sure this class exists in your CSS
  }

  postContentContainer.appendChild(postTitle);
  postContentContainer.appendChild(postBody);
  if (post.media) {
    postContentContainer.appendChild(postImage);
  }

  // Footer section with reactions (Like)
  const footer = document.createElement("footer");

  const reactContainer = document.createElement("div");
  reactContainer.className = "react-container";

  const emojiContainer = document.createElement("div");
  emojiContainer.className = "emoji-container";

  const thumbsUpButton = document.createElement("button");
  thumbsUpButton.type = "button";
  thumbsUpButton.className = "emoji-btn";
  thumbsUpButton.setAttribute("data-emoji", "thumbsUp");
  thumbsUpButton.textContent = "👍";

  const thumbsUpCount = document.createElement("span");
  thumbsUpCount.className = "emoji-count";
  thumbsUpCount.id = "thumbsUp-count";
  thumbsUpCount.textContent = post._count.reactions;

  const addCommentForm = document.createElement("form");
  addCommentForm.className = "add-comment-form";
  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.className = "comment-input";
  commentInput.placeholder = "Add a comment...";
  const commentButton = document.createElement("button");
  commentButton.type = "submit";
  commentButton.className = "comment-btn";
  commentButton.textContent = "Reply";

  emojiContainer.appendChild(thumbsUpButton);
  emojiContainer.appendChild(thumbsUpCount);
  reactContainer.appendChild(emojiContainer);
  footer.appendChild(reactContainer);
  addCommentForm.appendChild(commentInput);
  addCommentForm.appendChild(commentButton);
  footer.appendChild(addCommentForm);

  // Append all the sections to the feed (article element)
  feed.appendChild(header);
  feed.appendChild(postContentContainer);
  feed.appendChild(footer);
}

/**
 * Appends a comment to the comments section.
 * @param {Object} comment - The comment data object.
 */
export function appendComments(post) {
  const commentsSection = document.querySelector(".comments");

  // Loop through the comments array
  post.comments.forEach((comment) => {
    const commentContent = document.createElement("article");
    commentContent.className = "comment-content";

    // Header section (Avatar and username)
    const header = document.createElement("header");
    header.className = "avatar-small";

    const avatarLink = document.createElement("a");
    avatarLink.href = "/profile/";
    const url = new URL(window.location.origin + "/profile/");
    url.searchParams.set("username", comment.author.name);
    avatarLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.history.pushState({}, "", url.toString());
      window.location.href = url.toString();
    });

    const avatarImg = document.createElement("img");
    avatarImg.className = "avatar-img";
    avatarImg.alt = "User Avatar";
    avatarImg.src = comment.author.avatar.url;

    const username = document.createElement("span");
    username.className = "username";
    username.textContent = comment.author.name.charAt(0).toUpperCase() + comment.author.name.slice(1);

    avatarLink.appendChild(avatarImg);
    avatarLink.appendChild(username);
    header.appendChild(avatarLink);

    // Time container for comment date
    const timeContainer = document.createElement("div");
    timeContainer.className = "time-container";
    const commentDate = document.createElement("time");
    commentDate.className = "post-date";
    commentDate.setAttribute("datetime", comment.created);
    commentDate.textContent = `Posted on: ${new Date(comment.created).toDateString()}`;

    timeContainer.appendChild(commentDate);
    header.appendChild(timeContainer);

    // Comment body
    const commentBody = document.createElement("div");
    commentBody.className = "comment-body";

    const commentText = document.createElement("p");
    commentText.textContent = comment.body || "No comment text";

    commentBody.appendChild(commentText);

    // Footer with reactions (Like and Reply)
    const footer = document.createElement("footer");
    footer.className = "react-container";

    const replyContainer = document.createElement("div");
    replyContainer.className = "reply-container";

    const replyButton = document.createElement("button");
    replyButton.type = "button";
    replyButton.className = "reply-btn";
    replyButton.textContent = "Reply";

    replyContainer.appendChild(replyButton);

    footer.appendChild(replyContainer);

    // Append all the sections to the comment content
    commentContent.appendChild(header);
    commentContent.appendChild(commentBody);
    commentContent.appendChild(footer);

    // Append the complete comment to the comments section
    commentsSection.appendChild(commentContent);
  });
}

