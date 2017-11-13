import * as Action from './ActionTypes';
import * as Api from '../api';

export const getAllPosts = () => {
  const posts = Api.getAllPosts();
  return {
    type: Aciton.GET_ALL_POSTS,
    posts,
  };
};
export const getPost = id => {
  const post = Api.getPost(id);
  return {
    type: Action.GET_POSTS,
    id,
    post,
  };
};

export const postPost = () => {
  return {
    type: Action.POST_POSTS,
  };
};

export const editPost = () => {
  return {
    type: Action.PUT_POSTS,
  };
};

export const deletePost = () => {
  return {
    type: Action.DELTE_POSTS,
  };
};

export const upvotePost = () => {
  return {
    type: Action.POST_UPVOTE_POST,
  };
};

export const getComment = () => {
  return {
    type: Action.GET_COMMENT,
  };
};

export const postComment = () => {
  return {
    type: Action.POST_COMMENT,
  };
};

export const putComment = () => {
  return {
    type: Action.PUT_COMMENT,
  };
};

export const deleteComment = () => {
  return {
    type: Action.DELETE_COMMENT,
  };
};

export const upvoteComment = () => {
  return {
    type: Action.POST_UPVOTE_COMMENT,
  };
};
