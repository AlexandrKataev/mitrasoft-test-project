import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'shared/models';
import { RootState } from '../store';

interface ICommentsState {
  comments: { [key: string]: IComment[] };
  isLoading: boolean;
}

const initialState: ICommentsState = {
  comments: { '1': [] },
  isLoading: false,
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getCommentsFetch: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
    getCommentsSuccess: (state, action: PayloadAction<IComment[]>) => {
      state.comments[action.payload[0].postId] = action.payload;
      state.isLoading = false;
    },
    getCommentsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCommentsFetch, getCommentsSuccess, getCommentsFailure } = commentSlice.actions;

export const selectComments = (state: RootState) => state.comments;
export const selectIsLoadingComments = (state: RootState) => state.comments.isLoading;

export default commentSlice.reducer;
