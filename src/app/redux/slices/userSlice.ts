import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPost, IUser } from 'shared/models';
import { RootState } from '../store';
import { getPostQueries } from 'shared/api/services';

const initialState = {
  userInfo: {
    id: 1,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  } as IUser,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserInfoFetch: (state, action: PayloadAction<IUser>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { getUserInfoFetch } = userSlice.actions;

export const selectUserInfo = (state: RootState) => state.user;

export default userSlice.reducer;
