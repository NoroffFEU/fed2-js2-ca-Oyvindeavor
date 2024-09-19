// Dependencies: None
// This file contains functions that sort an array of posts based on different criteria.
// The sortByOldest function sorts the posts by the oldest creation date.
// The sortByMostLiked function sorts the posts by the number of reactions in descending order.
// The sortByMostCommented function sorts the posts by the number of comments in descending order.

/**
 *@description Sorts an array of posts by the oldest creation date.
 *
 * This function takes an array of post objects, each containing a `created` date,
 * and returns a new array sorted by the oldest date first (ascending order).
 *
 * @param {Array<Object>} posts - An array of post objects, where each object contains a `created` property in ISO date format.
 * @returns {Array<Object>} - A new array of posts sorted by the oldest date.
 *
 * @example
 * // Example usage:
 * const posts = [
 *   { id: 1, title: "First Post", body: "This is the first post.", created: "2021-09-01T12:00:00Z" },
 *   { id: 2, title: "Second Post", body: "This is the second post.", created: "2020-05-10T10:00:00Z" },
 *   { id: 3, title: "Third Post", body: "This is the third post.", created: "2022-01-15T08:00:00Z" }
 * ];
 *
 * const sortedByOldest = sortByOldest(posts);
 * console.log(sortedByOldest);
 *
 * // Output:
 * // [
 * //   { id: 2, title: "post2", body: "post2", created: "2020-05-10T10:00:00Z" },
 * //   { id: 1, title: "post1", body: "post1", created: "2021-09-01T12:00:00Z" },
 * //   { id: 3, title: "post3", body: "post3", created: "2022-01-15T08:00:00Z" }
 * // ]
 */
export function sortByOldest(posts) {
  const sortPosts = posts.sort((a, b) => {
    return new Date(a.created) - new Date(b.created);
  });
  console.log("Sorted posts: ", sortPosts);
  return sortPosts;
}

/**
 * @description Sorts an array of posts by the number of reactions in descending order.
 *
 * This function takes an array of post objects, where each post contains a `_count` object with
 * a `reactions` property. It sorts the posts based on the number of reactions, from most liked (highest reactions)
 * to least liked (lowest reactions).
 *
 * @param {Array<Object>} posts - An array of post objects, where each object contains a `_count.reactions` property representing the number of reactions.
 * @returns {Array<Object>} - A new array of posts sorted by the number of reactions in descending order.
 *
 * @example
 * // Example usage:
 * const posts = [
 *   { id: 1, title: "First Post", _count: { reactions: 12 } },
 *   { id: 2, title: "Second Post", _count: { reactions: 45 } },
 *   { id: 3, title: "Third Post", _count: { reactions: 30 } }
 * ];
 *
 * const sortedByMostLiked = sortByMostLiked(posts);
 * console.log(sortedByMostLiked);
 *
 * // Output:
 * // [
 * //   { id: 2, title: "Second Post", _count: { reactions: 45 } },
 * //   { id: 3, title: "Third Post", _count: { reactions: 30 } },
 * //   { id: 1, title: "First Post", _count: { reactions: 12 } }
 * // ]
 */
export function sortByMostLiked(posts) {
  const sortPosts = posts.sort((a, b) => {
    return b._count.reactions - a._count.reactions;
  });
  console.log("Sorted posts: ", sortPosts);
  return sortPosts;
}

/**
 * @description Sorts an array of posts by the number of comments in descending order.
 *
 * This function takes an array of post objects, where each post contains a `_count` object with
 * a `comments` property. It sorts the posts based on the number of comments, from most commented
 * (highest number of comments) to least commented (lowest number of comments).
 *
 * @param {Array<Object>} posts - An array of post objects, where each object contains a `_count.comments` property representing the number of comments.
 * @returns {Array<Object>} - A new array of posts sorted by the number of comments in descending order.
 *
 * @example
 * // Example usage:
 * const posts = [
 *   { id: 1, title: "First Post", _count: { comments: 5 } },
 *   { id: 2, title: "Second Post", _count: { comments: 10 } },
 *   { id: 3, title: "Third Post", _count: { comments: 7 } }
 * ];
 *
 * const sortedByMostCommented = sortByMostCommented(posts);
 * console.log(sortedByMostCommented);
 *
 * // Output:
 * // [
 * //   { id: 2, title: "Second Post", _count: { comments: 10 } },
 * //   { id: 3, title: "Third Post", _count: { comments: 7 } },
 * //   { id: 1, title: "First Post", _count: { comments: 5 } }
 * // ]
 */
export function sortByMostCommented(posts) {
  const sortPosts = posts.sort((a, b) => {
    return b._count.comments - a._count.comments;
  });
  console.log("Sorted posts: ", sortPosts);
  return sortPosts;
}
