/**
 * @description Creates and appends post elements to the feed container.
 * @param {array} posts
 * @example
 */
export function appendPostToFeed(posts) {
  const feed = document.querySelector(".feed");

  posts.forEach((post) => {
    // Create the main post element (article)
    const postElement = document.createElement("article");
    postElement.className = "post-content";

    // Create and append avatar section
    const avatarSection = document.createElement("header");
    avatarSection.className = "avatar-small";

    const avatarLink = document.createElement("a");
    avatarLink.href = `/post/${post.name}`;
    avatarLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = `/profile/?username=${post.author.name}`;
    });

    const avatarImg = document.createElement("img");
    avatarImg.className = "avatar-img";
    avatarImg.alt = "User Avatar";
    avatarImg.src = post.author.avatar.url;

    const username = document.createElement("span");
    username.className = "username";
    username.textContent = post.author.name.charAt(0).toUpperCase() + post.author.name.slice(1);

    avatarLink.appendChild(avatarImg);
    avatarLink.appendChild(username);
    avatarSection.appendChild(avatarLink);

    // Time container
    const timeContainer = document.createElement("div");
    timeContainer.className = "time-container";
    const postDate = document.createElement("time");
    postDate.className = "post-date";
    postDate.setAttribute("datetime", post.created);
    postDate.textContent = `Posted on: ${new Date(post.created).toDateString()}`;

    timeContainer.appendChild(postDate);
    avatarSection.appendChild(timeContainer);

    // Create and append post content (section)
    const postContentContainer = document.createElement("section");
    postContentContainer.className = "post-content-container";

    const postLink = document.createElement("a");
    postLink.href = `/post/${post.id}`;
    postLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = `/post/?id=${post.id}`;
    });

    const postTitle = document.createElement("h2");
    postTitle.className = "post-title";
    postTitle.textContent = post.title;

    const postText = document.createElement("p");
    postText.textContent = post.body;

    const postImage = document.createElement("img");
    if (post.media) {
      postImage.src = post.media.url;
      postImage.alt = "Post Image";
      postImage.className = "post-img";
    }

    postLink.appendChild(postTitle);
    postLink.appendChild(postText);
    if (post.media) {
      postLink.appendChild(postImage); // Append image only if it exists
    }
    postContentContainer.appendChild(postLink);

    // Create and append reaction container (footer)
    const reactContainer = document.createElement("footer");

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

    emojiContainer.appendChild(thumbsUpButton);
    emojiContainer.appendChild(thumbsUpCount);
    reactContainer.appendChild(emojiContainer);

    // Append all sections to the postElement (article)
    postElement.appendChild(avatarSection);
    postElement.appendChild(postContentContainer);
    postElement.appendChild(reactContainer);

    // Append the complete post to the feed
    feed.appendChild(postElement);
  });
}
