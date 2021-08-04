import { commentsReducerTypes as types } from '../actions/commentsActions';

const defaultState = {
  comments: [],
};

export const commentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_COMMENTS_LIST:
      return { comments: action.payload };
    default:
      return state;
  }
};
