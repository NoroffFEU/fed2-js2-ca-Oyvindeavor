
/**
 * @description loops through the posts array and appends each post to the feed. (displays it)
 * @param {} posts 
 * @example 
 * const posts = [{title: "hello", body: "world"}, {title: "hello", body: "world"}];
 * appendPostToFeed(posts);
 */
export function appendPostToFeed(posts) {
  const feed = document.querySelector(".feed");

  posts.forEach((post) => {
    const postContent = createPostContent(post);
    feed.appendChild(postContent);
  });
}

/**
 * @description Clears the existing posts elements on the homepage from the feed.
 * This function should be called before loading new posts to avoid duplicate posts.
 * @example
 * const followersButton = document.querySelector(".followers-button");
 * followersButton.addEventListener("click", () => {
 * clearPostsFeed(); //without this, the posts will be appended to the existing posts.
 * loadNewPosts();
 * }
 */
export function clearPostsFeed() {
  const postContents = document.querySelectorAll(".feed .post-content");
  postContents.forEach((postContent) => postContent.remove());
}

/**
 * @description Loads and displays the posts in the feed taking in the posts array as an argument.
 * calls the clearPostsFeed function to clear the existing posts from the feed.
 * This function should be used to load and display posts on the homepage. 
 * @param {*} posts 
 * @example
 */
export function loadAndDisplayPosts(posts) {
  clearPostsFeed();       // Clear existing posts from the feed
  appendPostToFeed(posts); // Append new posts to the feed
}

/**
 * Creates the main post content container.
 * @param {Object} post - The post data object.
 * @returns {HTMLElement} - The complete post content element.
 */
function createPostContent(post) {
  const postContent = document.createElement("div");
  postContent.className = "post-content";

  const avatarSection = createAvatarSection(post.author);
  const postContentContainer = createPostContentContainer(post);
  const reactContainer = createReactionContainer(post);

  postContent.appendChild(avatarSection);
  postContent.appendChild(postContentContainer);
  postContent.appendChild(reactContainer);

  return postContent;
}

/**
 * Creates the avatar section.
 * @param {Object} author - The author object containing avatar and name.
 * @returns {HTMLElement} - The avatar section element.
 */
function createAvatarSection(author) {
  const avatarContainer = document.createElement("div");
  avatarContainer.className = "avatar-small";

  const avatarLink = document.createElement("a");
  avatarLink.addEventListener("click", (event) => {
    event.preventDefault();
    const url = new URL(window.location.origin + "/profile/");
    url.searchParams.set("", author.name);
    window.history.pushState({}, "", url.toString());
    window.location.href = url.toString();
  });

  const avatarImg = document.createElement("img");
  avatarImg.className = "avatar-img";
  avatarImg.alt = "User Avatar";
  avatarImg.src = author.avatar.url;

  const username = document.createElement("span");
  username.className = "username";
  username.textContent = author.name.charAt(0).toUpperCase() + author.name.slice(1); // Capitalize first letter

  avatarLink.appendChild(avatarImg);
  avatarLink.appendChild(username);
  avatarContainer.appendChild(avatarLink);

  return avatarContainer;
}

/**
 * Creates the main post content container with title, body, and image.
 * @param {Object} post - The post data object.
 * @returns {HTMLElement} - The post content container element.
 */
function createPostContentContainer(post) {
  const postContentContainer = document.createElement("div");
  postContentContainer.className = "post-content-container";

  const postLink = document.createElement("a");
  postLink.href = `/post/${post.id}`;
  postLink.addEventListener("click", (event) => {
    event.preventDefault();
    const url = new URL(window.location.origin + "/post/");
    url.searchParams.set("id", post.id);
    window.history.pushState({}, "", url.toString());
    window.location.href = url.toString();
  });

  const postTitle = document.createElement("h2");
  postTitle.className = "post-title";
  postTitle.textContent = post.title;

  const postText = document.createElement("p");
  postText.textContent = post.body;

  const postImage = document.createElement("img");
  if (post.media) {
    postImage.src = post.media.url;
    postImage.alt = "Post Image"; // Placeholder alt text
  }

  postLink.appendChild(postTitle);
  postLink.appendChild(postText);
  postLink.appendChild(postImage);
  postContentContainer.appendChild(postLink);

  return postContentContainer;
}

/**
 * Creates the reaction container with emoji reactions and the post date.
 * @param {Object} post - The post data object.
 * @returns {HTMLElement} - The reaction container element.
 */
function createReactionContainer(post) {
  const reactContainer = document.createElement("div");
  reactContainer.className = "react-container";

  const emojiReactions = document.createElement("div");
  emojiReactions.className = "emoji-reactions";

  const thumbsUpButton = document.createElement("button");
  thumbsUpButton.type = "button";
  thumbsUpButton.className = "emoji-btn";
  thumbsUpButton.setAttribute("data-emoji", "thumbsUp");
  thumbsUpButton.textContent = "👍";

  const thumbsUpCount = document.createElement("span");
  thumbsUpCount.className = "emoji-count";
  thumbsUpCount.id = "thumbsUp-count";
  thumbsUpCount.textContent = post._count.reactions;

  emojiReactions.appendChild(thumbsUpButton);
  emojiReactions.appendChild(thumbsUpCount);

  const postDate = document.createElement("span");
  postDate.className = "post-date";
  postDate.textContent = new Date(post.created).toDateString();

  reactContainer.appendChild(emojiReactions);
  reactContainer.appendChild(postDate);

  return reactContainer;
}
