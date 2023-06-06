import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ISortState {
  sortBy: 'no' | '&_sort=title&_order=asc';
}

const initialState: ISortState = {
  sortBy: 'no',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<'no' | '&_sort=title&_order=asc'>) => {
      state.sortBy = action.payload;
    },
  },
});

export const selectSortBy = (state: RootState) => state.sort.sortBy;

export const { setSortBy } = sortSlice.actions;

export default sortSlice.reducer;
