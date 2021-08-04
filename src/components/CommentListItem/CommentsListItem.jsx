import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import { Comment } from './CommentListItem.styles';

const CommentsListItem = ({ commentData }) => {
  const { body } = commentData;
  return (
    <Comment>
      {body}
    </Comment>
  );
};

CommentsListItem.propTypes = {
  commentData: PropTypes.shape({
    id: number,
    postId: number,
    body: string,
  }).isRequired,
};

export default CommentsListItem;
