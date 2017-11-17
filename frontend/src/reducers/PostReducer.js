import {
  GET_ALL_POSTS,
  GET_POSTS,
  POST_POST,
  PUT_POST,
  DELETE_POST,
  POST_VOTE_POST,
} from '../actions/ActionTypes';

const INITIAL_STATE = {
  allPosts: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.posts.reduce((accu, curr) => {
          accu[curr.id] = curr;
          return accu;
        }, {})
      };
    case POST_VOTE_POST:
      return {
        ...state,
        allPosts: {
          ...state.allPosts,
          [action.id]: {
            ...state.allPosts[action.id],
            voteScore: action.voteScore,
          }
        }
      };
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
      const allPosts = state.allPosts.filter(post => {
        return post.id !== action.id;
      });
      return { ...state, allPosts };
    default:
      return state;
  }
};
