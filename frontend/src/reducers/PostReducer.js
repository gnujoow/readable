import {
  GET_ALL_POSTS,
  GET_POSTS,
  POST_POST,
  PUT_POST,
  DELETE_POST,
} from '../actions/ActionTypes'

const INITIAL_STATE = {
  posts: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      console.log(1);
      return;
    case GET_POSTS:
      console.log(2);
      return;
    case POST_POST:
      console.log(2);
      return;
    case PUT_POST:
      console.log(3);
      return;
    case DELTE_POSTS:
      console.log(4);
      return;
    default
      return state;
  }
};
