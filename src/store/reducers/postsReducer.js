import { postsActionsTypes as types } from '../actions/postsActions';

const defaultState = {
  listOfPosts: [],
  isLoading: false,
  error: null,
  selectedPost: null,
};

export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_LIST_OF_POSTS:
      return { ...state, isLoading: true };

    case types.FETCH_LIST_OF_POSTS_SUCCESS: {
      return { ...state, isLoading: false, listOfPosts: action.payload };
    }

    case types.FETCH_LIST_OF_POSTS_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case types.DELETE_SELECTED_POST:
      return {
        ...state,
        listOfPosts: state.listOfPosts.filter(
          (post) => post.id !== action.payload,
        ),
      };

    case types.FETCH_SELECTED_POST:
      return { ...state, isLoading: true };

    case types.FETCH_SELECTED_POST_SUCCESS: {
      return { ...state, isLoading: false, selectedPost: action.payload };
    }

    case types.FETCH_SELECTED_POST_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
