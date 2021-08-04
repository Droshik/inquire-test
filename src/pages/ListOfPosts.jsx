import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostListItem from '../components/PostListItem/PostListItem';
import { fetchListOfPostsAction } from '../store/actions/postsActions';
import { CreateNewPost } from '../components/CreateNewPost/CreateNewPost';

const ListOfPosts = () => {
  const { listOfPosts, error, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListOfPostsAction());
  }, [dispatch]);

  if (isLoading) {
    return <h1>LOADER</h1>;
  }

  if (error) {
    return <h1>{error.toString()}</h1>;
  }

  return (
    <>
      <CreateNewPost />

      {listOfPosts.length && listOfPosts.map((postContent) => (
        <PostListItem key={postContent.id} postContent={postContent} />
      ))}
    </>
  );
};

export default ListOfPosts;
