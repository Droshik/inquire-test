const BASE_URL = 'https://bloggy-api.herokuapp.com/posts';
const headers = new Headers();
headers.append('Content-Type', 'application/json');

export const getListOfPosts = () => fetch(BASE_URL).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('can not load data');
});

export const getPost = (postId) => fetch(`${BASE_URL}/${postId}?_embed=comments`).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('No post with this id');
});

/**
 * @param postData Content of post.
 * @param {string} postData.title Title of post.
 * @param {string} postData.body Post text.
 */
export const createPost = (postData) => {
  const raw = JSON.stringify(postData);

  const requestOptions = {
    method: 'POST',
    body: raw,
    headers,
  };

  return fetch(BASE_URL, requestOptions);
};

export const deletePost = (postId) => {
  const requestOptions = {
    method: 'DELETE',
    headers,
  };

  return fetch(`${BASE_URL}/${postId}`, requestOptions);
};

/**
 * @param postId Id of post.
 * @param postData Content of post.
 * @param {string} postData.title Title of post.
 * @param {string} postData.body Post text.
 */
export const updatePost = (postId, postData) => {
  const raw = JSON.stringify(postData);

  const requestOptions = {
    method: 'PUT',
    body: raw,
    headers,
  };

  return fetch(`${BASE_URL}/${postId}`, requestOptions);
};
