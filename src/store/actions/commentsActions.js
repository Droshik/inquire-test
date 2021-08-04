export const commentsReducerTypes = {
  SET_COMMENTS_LIST: 'comments/SET_COMMENTS_LIST',
};

export const updateComments = (payload) => ({
  type: commentsReducerTypes.SET_COMMENTS_LIST,
  payload,
});
