import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getPostQueries } from 'shared/api/services';

interface ISearchState {
  searchValue: string;
}

const initialState: ISearchState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<getPostQueries>) => {
      state.searchValue = action.payload.searchValue;
    },
  },
});

export const selectSearchValue = (state: RootState) => state.search.searchValue;

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
