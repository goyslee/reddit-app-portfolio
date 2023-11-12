// Action types
export const SET_POSTS = 'SET_POSTS';

// Action creators
export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts
});
