import React from 'react';
import { useSelector } from 'react-redux';
import CommentsListItem from './CommentListItem/CommentsListItem';

const CommentsList = () => {
  const { comments } = useSelector((state) => state.comments);
  return (
    <div>
      {comments.length > 0
        && comments.map((comment) => (
          <CommentsListItem commentData={comment} key={comment.id} />
        ))}
    </div>
  );
};

export default CommentsList;
