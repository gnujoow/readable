import { combineReducers } from 'redux';
import postReducer from './PostReducer';
import categoryReducer from './CategoryReducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  posts: postReducer,
});

export default rootReducer;
