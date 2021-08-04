import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createPostAction } from '../../store/actions/postsActions';
import {
  CreateNewPostForm, CreateNewInput, CreateNewTextarea, CreateNewPostButton,
} from './CreateNewPost.styles';

export const CreateNewPost = () => {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const postRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (titleRef.current.value && postRef.current.value) {
      dispatch(createPostAction(titleRef.current.value, postRef.current.value));
      titleRef.current.value = '';
      postRef.current.value = '';
    }
  };
  return (
    <CreateNewPostForm onSubmit={submitHandler}>
      <CreateNewInput type="text" placeholder="Title" ref={titleRef} />
      <CreateNewTextarea rows="10" placeholder="Post" ref={postRef} />
      <CreateNewPostButton type="submit">Create Post</CreateNewPostButton>
    </CreateNewPostForm>
  );
};
