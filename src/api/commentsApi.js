const BASE_URL = 'https://bloggy-api.herokuapp.com/comments';
const headers = new Headers();
headers.append('Content-Type', 'application/json');

/**
 * @param commentData Content of comment.
 * @param {number} commentData.postId id of post to which the comment.
 * @param {string} commentData.body Comment text.
 */
export const createComment = (commentData) => {
  const raw = JSON.stringify(commentData);

  const requestOptions = {
    method: 'POST',
    body: raw,
    headers,
  };

  return fetch(BASE_URL, requestOptions);
};
