import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPost } from 'shared/models';
import { RootState } from '../store';
import { getPostQueries } from 'shared/api/services';

const initialState = {
  posts: [] as IPost[],
  isLoading: false,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    resetState: (state) => {
      state.posts = [];
    },
    setFetching: (state) => {
      state.isLoading = true;
    },
    getPostsFetch: (state, action: PayloadAction<getPostQueries>) => {
      state.isLoading = true;
    },
    getPostsSuccess: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getPostsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getPostsFetch, getPostsSuccess, getPostsFailure, setFetching, resetState } =
  postSlice.actions;

export const selectPostList = (state: RootState) => state.posts;
export const selectIsLoadingPosts = (state: RootState) => state.posts.isLoading;

export default postSlice.reducer;
