import * as Action from './ActionTypes';

export const getAllPosts = posts => {
  return {
    type: Action.GET_ALL_POSTS,
    posts,
  };
};

export const getCategories = categories => {
  return {
    type: Action.GET_CATEGORIES,
    categories,
  };
};
export const getPost = (id, post) => {
  return {
    type: Action.GET_POST,
    id,
    post,
  };
};

export const postPost = () => {
  return {
    type: Action.POST_POST,
  };
};

export const editPost = () => {
  return {
    type: Action.PUT_POST,
  };
};

export const deletePost = id => {
  return {
    type: Action.DELETE_POST,
    id,
  };
};

export const votePost = (id, voteScore) => {
  return {
    type: Action.POST_VOTE_POST,
    id,
    voteScore,
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
