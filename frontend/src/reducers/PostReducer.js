import {
  GET_ALL_POSTS,
  GET_POSTS,
  POST_POST,
  PUT_POST,
  DELETE_POST,
} from '../actions/ActionTypes';

const INITIAL_STATE = {
  allPosts: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { allPosts: action.posts };
    case GET_POSTS:
      console.log(2);
      return;
    case POST_POST:
      console.log(2);
      return;
    case PUT_POST:
      console.log(3);
      return;
    case DELETE_POST:
      console.log(4);
      return;
    default:
      return state;
  }
};
