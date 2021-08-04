import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  PostListWrap,
  PostListTitle,
  PostListTitleWrap,
  PostListBody,
  PostListDeleteButton,
  PostListDetailsButton,
} from './PostListItem.styles';
import { deletePostAction } from '../../store/actions/postsActions';

const PostListItem = ({ postContent }) => {
  const { id, body, title } = postContent;
  const dispatch = useDispatch();

  const deleteClickHandler = () => {
    dispatch(deletePostAction(postContent.id));
  };

  return (
    <PostListWrap className="post">
      <PostListTitleWrap className="post__title">
        <PostListTitle>{title}</PostListTitle>
      </PostListTitleWrap>
      <PostListBody className="post__body">{body}</PostListBody>
      <PostListDeleteButton type="button" onClick={deleteClickHandler}>
        X
      </PostListDeleteButton>
      <PostListDetailsButton to={`post/${id}`}>
        Show details
      </PostListDetailsButton>
    </PostListWrap>
  );
};

PostListItem.propTypes = {
  postContent: PropTypes.shape({
    id: number,
    title: string,
    body: string,
  }).isRequired,
};

export default PostListItem;
