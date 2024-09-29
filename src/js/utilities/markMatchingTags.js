// Loops through the tags and marks the input tags elements that are matching with the provided
// tags you provide in the function.
export function markMatchingTags(tags) {
    const checkbox = document.querySelectorAll(`input[name="tags"]`);
    checkbox.forEach((tag) => {
      if (tags.includes(tag.value)) {
        tag.checked = true;
      }
    });
  }
  