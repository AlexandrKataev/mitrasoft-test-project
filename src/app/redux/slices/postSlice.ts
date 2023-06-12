import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPost } from 'shared/models';
import { RootState } from '../store';
import { getPostQueries } from 'shared/api/services';

interface IPostsState {
  searchValue: string;
  sortBy: '' | 'title';
  totalPages: number;
  currentPage: number;
  posts: IPost[];
  isLoading: boolean;
}

const initialState = {
  searchValue: '',
  sortBy: '',
  totalPages: 0,
  currentPage: 1,
  posts: [] as IPost[],
  isLoading: false,
} as IPostsState;

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<getPostQueries>) => {
      state.sortBy = action.payload.sortBy;
    },
    setSearchValue: (state, action: PayloadAction<getPostQueries>) => {
      state.searchValue = action.payload.searchValue;
    },
    resetCurrentPage: (state) => {
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<getPostQueries>) => {
      state.currentPage = action.payload.currentPage;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
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

export const {
  setSortBy,
  setSearchValue,
  resetCurrentPage,
  setCurrentPage,
  setTotalPages,
  getPostsFetch,
  getPostsSuccess,
  getPostsFailure,
  setFetching,
  resetState,
} = postSlice.actions;

export const selectPostList = (state: RootState) => state.posts.posts;
export const selectIsLoadingPosts = (state: RootState) => state.posts.isLoading;

export const selectCurrentPage = (state: RootState) => state.posts.currentPage;
export const selectTotalPages = (state: RootState) => state.posts.totalPages;

export const selectSearchValue = (state: RootState) => state.posts.searchValue;

export const selectSortBy = (state: RootState) => state.posts.sortBy;

export default postSlice.reducer;
