import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import AddComment from '../../components/AddComment/AddComment';
import {
  deletePostAction,
  fetchSelectedPostAction,
} from '../../store/actions/postsActions';
import CommentsList from '../../components/CommentsList';
import PostEditor from '../../components/PostEditor/PostEditor';
import {
  BackToListLink,
  PostDetailsControls,
  PostEditButton,
  PostDeleteButton,
} from './PostDetails.styles';

const PostDetails = () => {
  const { id } = useParams();
  const { comments } = useSelector((state) => state.comments);
  const { selectedPost, error } = useSelector((state) => state.posts);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchSelectedPostAction(id));
  }, []);

  const deleteClickHandler = () => {
    dispatch(deletePostAction(parseInt(id, 10)));
    history.push('/');
  };

  if (error) {
    return <h1>{error.toString()}</h1>;
  }

  return (
    selectedPost && (
      <div>
        <PostDetailsControls>
          <BackToListLink
            to="/"
            onClick={() => {
              dispatch(fetchSelectedPostAction(null));
            }}
          >
            ⬅ List of all posts
          </BackToListLink>
          <PostEditButton
            type="button"
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            edit post
          </PostEditButton>
          <PostDeleteButton type="button" onClick={deleteClickHandler}>
            delete post
          </PostDeleteButton>
        </PostDetailsControls>

        {isEditing && <PostEditor />}

        <h2>{selectedPost.title}</h2>
        <div>{selectedPost.body}</div>

        <AddComment />
        {comments.length > 0 && <CommentsList />}
      </div>
    )
  );
};

export default PostDetails;
