import {
  createPost,
  deletePost,
  getListOfPosts,
  getPost,
  updatePost,
} from '../../api/postsApi';
import { updateComments } from './commentsActions';

export const postsActionsTypes = {
  FETCH_LIST_OF_POSTS: 'posts/FETCH_LIST_OF_POSTS',
  FETCH_LIST_OF_POSTS_SUCCESS: 'posts/FETCH_LIST_OF_POSTS_SUCCESS',
  FETCH_LIST_OF_POSTS_ERROR: 'posts/FETCH_LIST_OF_POSTS_ERROR',
  DELETE_SELECTED_POST: 'posts/DELETE_SELECTED_POST',
  FETCH_SELECTED_POST: 'posts/FETCH_SELECTED_POST',
  FETCH_SELECTED_POST_SUCCESS: 'posts/FETCH_SELECTED_POST_SUCCESS',
  FETCH_SELECTED_POST_ERROR: 'posts/FETCH_SELECTED_POST_ERROR',
};

export const fetchListOfPostsAction = () => (dispatch) => {
  dispatch({ type: postsActionsTypes.FETCH_LIST_OF_POSTS });
  getListOfPosts()
    .then((posts) => {
      dispatch({
        type: postsActionsTypes.FETCH_LIST_OF_POSTS_SUCCESS,
        payload: posts,
      });
    })
    .catch((e) => dispatch({
      type: postsActionsTypes.FETCH_LIST_OF_POSTS_ERROR,
      payload: e,
    }));
};

export const fetchSelectedPostAction = (postId) => (dispatch) => {
  if (!postId) {
    dispatch({
      type: postsActionsTypes.FETCH_SELECTED_POST_SUCCESS,
      payload: null,
    });
  } else {
    dispatch({ type: postsActionsTypes.FETCH_SELECTED_POST });
    getPost(postId)
      .then((post) => {
        dispatch({
          type: postsActionsTypes.FETCH_SELECTED_POST_SUCCESS,
          payload: post,
        });
        dispatch(updateComments(post.comments));
      })
      .catch((e) => dispatch({
        type: postsActionsTypes.FETCH_SELECTED_POST_ERROR,
        payload: e,
      }));
  }
};

export const updatePostAction = (id, data) => (dispatch) => {
  updatePost(id, data).then(() => {
    dispatch(fetchSelectedPostAction(id));
  });
};

export const deletePostAction = (postId) => (dispatch) => {
  if (postId) {
    deletePost(parseInt(postId, 10)).then(() => {
      dispatch({
        type: postsActionsTypes.DELETE_SELECTED_POST,
        payload: postId,
      });
    });
  }
};

export const createPostAction = (title, body) => (dispatch) => {
  createPost({ title, body })
    .then((response) => response)
    .then(() => {
      dispatch(fetchListOfPostsAction());
    });
};
