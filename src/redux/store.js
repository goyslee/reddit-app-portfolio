// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './reducers/postsReducer';
import commentsReducer from './reducers/commentsSlice'; // Import your comments slice reducer

export default configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer, // Add the comments reducer
    },
});
