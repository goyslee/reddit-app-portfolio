// src/redux/commentsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchComments as fetchCommentsApi } from '../../api/RedditAPI';

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async ({ subreddit, postId }) => {
        const response = await fetchCommentsApi(subreddit, postId);
        return response;
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        entities: {},
        loading: 'idle',
    },
    reducers: {},
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.loading = 'loading';
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.entities[action.meta.arg.postId] = action.payload;
            state.loading = 'idle';
        },
        [fetchComments.rejected]: (state) => {
            state.loading = 'idle';
        },
    },
});

export default commentsSlice.reducer;
