import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  AddCommentLabel,
  AddCommentTextarea,
  AddCommentButton,
} from './AddComment.styles';
import { createComment } from '../../api/commentsApi';
import { fetchSelectedPostAction } from '../../store/actions/postsActions';

const AddComment = () => {
  const { id } = useParams();
  const { selectedPost } = useSelector((state) => state.posts);
  const commentRef = useRef('null');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (commentRef.current.value) {
      createComment({
        postId: selectedPost.id,
        body: commentRef.current.value,
      }).then(() => {
        dispatch(fetchSelectedPostAction(id));
      });
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <AddCommentLabel htmlFor="newComment">
        Write a comment
        <AddCommentTextarea
          name="comment"
          id="newComment"
          rows="3"
          placeholder="Comment"
          ref={commentRef}
        />
      </AddCommentLabel>
      <AddCommentButton type="submit">Send a comment</AddCommentButton>
    </form>
  );
};

export default AddComment;
