import { getPostFromUrlId } from "../../utilities/readUrl";
import { markMatchingTags } from "../../utilities/markMatchingTags";

// Gets post data from url, extracts the data, populates the form and-
// compares the tags from the api to the tags marks the checkboxes.
export async function populateEditForm() {
  const post = await getPostFromUrlId();
  const { title, body, image, tags } = extractPostData(post);
  populateFormFields(title, body, image);
  markMatchingTags(tags);
}

// Gets all the checked, checkbox Values from the form and returns it as an array
export function getCheckBoxValues() {
  const checkBoxValue = [];
  const checkboxes = document.querySelectorAll('input[name="tags"]:checked');

  checkboxes.forEach((checkbox) => {
    checkBoxValue.push(checkbox.value);
  });

  return checkBoxValue;
}

// Extracts the post data from the api and deconstructs it into an object-
// Returns the object with the data i need
export function extractPostData(post) {
  const title = post.title;
  const body = post.body;
  let image = null;
  if (post.media && post.media.url) {
    image = post.media.url;
  }
  const tags = post.tags;
  return { title, body, image, tags };
}

// Populates the form fields with the data from the api
export function populateFormFields(title, body, image) {
  const postTitle = document.querySelector("#postTitle");
  const postBody = document.querySelector("#postBody");
  const postImage = document.querySelector("#postImage");

  postTitle.value = title;
  postBody.value = body;
  postImage.value = image;
}

export function getEditPostInputValues() {
  const title = document.querySelector("#postTitle").value;
  const body = document.querySelector("#postBody").value;
  const media = document.querySelector("#postImage").value;
  const tags = getCheckBoxValues();

  const postData = { title, body, tags };

  if (media) {
    postData.media = media;
  }

  return postData;
}

// Displays the preview post
export function displayPreviewPost() {
  const postTitle = document.querySelector(".post-title");
  const postBody = document.querySelector(".post-body");
  const postImage = document.querySelector(".post-img");

  const { title, body, media } = getEditPostInputValues();

  postTitle.textContent = title;
  postBody.textContent = body;

  if (media) {
    postImage.src = media;
  }
}
