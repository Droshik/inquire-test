import { combineReducers } from '@reduxjs/toolkit';
import { commentsReducer } from './commentsReducer';
import { postsReducer } from './postsReducer';

export default combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
});
