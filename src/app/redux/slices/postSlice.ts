import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPost } from 'shared/models';
import { RootState } from '../store';

const initialState = {
  posts: [] as IPost[],
  isLoading: false,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostList: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
    getPostsFetch: (state, action: PayloadAction<string>) => {
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

export const { setPostList, getPostsFetch, getPostsSuccess, getPostsFailure } = postSlice.actions;

export const selectPostList = (state: RootState) => state.posts;

export default postSlice.reducer;
