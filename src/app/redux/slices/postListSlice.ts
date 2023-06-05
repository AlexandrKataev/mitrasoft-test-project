import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPost } from 'shared/models';
import { RootState } from '../store';

const initialState = {
  items: [] as IPost[],
};

export const postListSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {
    setPostList: (state, action: PayloadAction<IPost[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setPostList } = postListSlice.actions;

export const selectPostList = (state: RootState) => state.postList;

export default postListSlice.reducer;
