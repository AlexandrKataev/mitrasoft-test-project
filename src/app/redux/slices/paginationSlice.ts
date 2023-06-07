import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getPostQueries } from 'shared/api/services';

interface IPaginationState {
  totalPages: number;
  currentPage: number;
}

const initialState: IPaginationState = {
  totalPages: 0,
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    resetCurrentPage: (state) => {
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<getPostQueries>) => {
      state.currentPage = action.payload.currentPage;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
});

export const selectCurrentPage = (state: RootState) => state.pagination.currentPage;
export const selectTotalPages = (state: RootState) => state.pagination.totalPages;

export const { setCurrentPage, setTotalPages, resetCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;
