import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getPostQueries } from 'shared/api/services';

interface ISortState {
  sortBy: '' | 'title';
}

const initialState: ISortState = {
  sortBy: '',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<getPostQueries>) => {
      state.sortBy = action.payload.sortBy;
    },
  },
});

export const selectSortBy = (state: RootState) => state.sort.sortBy;

export const { setSortBy } = sortSlice.actions;

export default sortSlice.reducer;
