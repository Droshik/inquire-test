import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  PostEditorForm,
  PostEditorInput,
  PostEditorTextarea,
  PostEditorButton,
} from './PostEditor.styles';
import { updatePostAction } from '../../store/actions/postsActions';

const PostEditor = () => {
  const { id } = useParams();
  const { selectedPost } = useSelector((state) => state.posts);
  const { title, body } = selectedPost;
  const dispatch = useDispatch();

  const currentTitle = useRef(null);
  const currentBody = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (currentTitle.current.value && currentBody.current.value) {
      dispatch(
        updatePostAction(id, {
          title: currentTitle.current.value,
          body: currentBody.current.value,
        }),
      );
    }
  };
  return (
    <PostEditorForm onSubmit={submitHandler}>
      <PostEditorInput
        type="text"
        id="postEditorTitle"
        defaultValue={title}
        ref={currentTitle}
      />
      <PostEditorTextarea
        name=""
        id="postEditorBody"
        rows="10"
        defaultValue={body}
        ref={currentBody}
      />
      <PostEditorButton type="submit">Edit</PostEditorButton>
    </PostEditorForm>
  );
};

export default PostEditor;
