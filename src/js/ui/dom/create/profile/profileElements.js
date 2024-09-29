import { isProfileOwner } from "../../../../utilities/isProfileOwner";
import { readUrlName } from "../../../../utilities/readUrl";
import { readProfile } from "../../../../api/profile/read";
import { onDeletePost } from "../../../post/delete";

// This function loads the profile posts loops through each post and calls the createPost function on each post
export function loadProfilePosts(posts) {
  posts.forEach((post) => {
    createPost(post);
  });
}

// This function creates the profile posts section
export async function createPost(postData) {
  const owner = await isProfileOwner();

  // Create the article element
  const postArticle = document.createElement("article");
  postArticle.classList.add("post-content");

  // Create the header (avatar and username)
  const header = document.createElement("header");
  header.classList.add("avatar-small");

  const userLink = document.createElement("a");
  userLink.href = "";

  const avatar = document.createElement("img");
  avatar.src = postData.author.avatar.url;
  avatar.alt = "User Avatar";

  const username = document.createElement("span");
  username.classList.add("username");
  username.textContent = postData.author.name.charAt(0).toUpperCase() + postData.author.name.slice(1);

  userLink.appendChild(avatar);
  userLink.appendChild(username);
  header.appendChild(userLink);

  const timeContainer = document.createElement("div");
  timeContainer.classList.add("time-container");

  const timeElement = document.createElement("time");
  timeElement.classList.add("post-date");
  timeElement.setAttribute("datetime", postData.created);
  timeElement.textContent = `Posted on: ${new Date(postData.created).toDateString()}`;

  timeContainer.appendChild(timeElement);
  header.appendChild(timeContainer);

  // Create the post content container
  const postContentContainer = document.createElement("section");
  postContentContainer.classList.add("post-content-container");

  const postLink = document.createElement("a");

  postLink.addEventListener("click", async (event) => {
    event.preventDefault();
    window.location.href = `/post/?id=${postData.id}`;
  });

  const postTitle = document.createElement("h2");
  postTitle.classList.add("post-title");
  postTitle.textContent = postData.title;

  const postDescription = document.createElement("p");
  postDescription.textContent = postData.description;

  const postImage = document.createElement("img");
  postImage.classList.add("post-img");
  if (postData.media) {
    postImage.src = postData.media.url;
    postImage.alt = "Post Image";
  }

  postLink.appendChild(postTitle);
  postLink.appendChild(postDescription);
  postLink.appendChild(postImage);
  postContentContainer.appendChild(postLink);

  // Create the comments-likes section
  const commentsLikes = document.createElement("div");
  commentsLikes.classList.add("comments-likes");

  const likesText = document.createElement("span");
  likesText.textContent = "Likes 👍";

  const likesCount = document.createElement("span");
  likesCount.classList.add("emoji-count");
  likesCount.id = "thumbsUp-count";
  likesCount.textContent = postData._count.reactions;

  const commentsText = document.createElement("span");
  commentsText.textContent = "Comments";

  const commentsCount = document.createElement("span");
  commentsCount.classList.add("comment-count");
  commentsCount.id = "comment-count";
  commentsCount.textContent = postData._count.comments;

  commentsLikes.appendChild(likesText);
  commentsLikes.appendChild(likesCount);
  commentsLikes.appendChild(commentsText);
  commentsLikes.appendChild(commentsCount);

  // Create the edit-delete section
  // Checks to see if the owner of the post is the logged in user
  if (owner === true) {
    const editDelete = document.createElement("div");
    editDelete.classList.add("edit-delete");

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.classList.add("edit-post-button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", async (event) => {
      event.preventDefault();
      window.location.href = `/post/edit/?id=${postData.id}`;
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("delete-post-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (event) => onDeletePost(event, postData, postArticle));

    editDelete.appendChild(editButton);
    editDelete.appendChild(deleteButton);
    postArticle.appendChild(editDelete); // Append edit/delete buttons to the post
  }

  // Append everything to the article element
  postArticle.appendChild(header);
  postArticle.appendChild(postContentContainer);
  postArticle.appendChild(commentsLikes);

  // Append the post to the container
  document.querySelector(".user-posts").appendChild(postArticle);
}

export function clearPostsProfile() {
  const userPosts = document.querySelectorAll(".feed .user-posts");
  userPosts.forEach((post) => post.remove());
  // document.querySelectorAll(".feed .user-posts").forEach((post) => post.remove());
}

// Updates the whole profile page
export async function updateProfileUi() {
  const owner = await isProfileOwner();
  const readName = readUrlName();
  const profileData = await readProfile(readName);

  updateProfileDetails(profileData);

  if (owner === false) {
    const updateProfileButton = document.querySelector(".edit-button");
    updateProfileButton.style.display = "none";
  } else {
    const updateProfileButton = document.querySelector(".edit-button");
    updateProfileButton.style.display = "block";
  }
  // This toggles the update profile form button (show/hide)
  toggleUpdateProfileForm();
}

// updates only the profile details (Bio,name, followers etc.)
export async function updateProfileDetails(profileData) {
  const username = document.querySelector(".username");
  const profileImg = document.querySelector(".avatar-big");
  const bannerImg = document.querySelector(".user-banner");
  const bio = document.querySelector(".user-bio");
  const followers = document.querySelector(".followers");
  const following = document.querySelector(".following");

  username.textContent = profileData.data.name;
  profileImg.src = profileData.data.avatar.url;
  bannerImg.src = profileData.data.banner.url;
  bio.textContent = profileData.data.bio;
  followers.textContent = "followers " + profileData.data._count.followers;
  following.textContent = "following " + profileData.data._count.following;
}

// Toggles the update profile form (show/hide)
export function toggleUpdateProfileForm() {
  const updateProfileForm = document.querySelector(".update-profile-form");
  const updateProfileButton = document.querySelector(".edit-button");
  updateProfileButton.addEventListener("click", () => {
    if (updateProfileForm.style.display === "block") {
      updateProfileForm.style.display = "none";
      updateProfileButton.textContent = "Edit Profile";
    } else {
      updateProfileForm.style.display = "block";
      updateProfileButton.textContent = "Hide";
    }
  });
}
