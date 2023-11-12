import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    // other reducers can be added here
});

export default rootReducer;
