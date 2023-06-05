import { configureStore } from '@reduxjs/toolkit';
import postList from './slices/postListSlice';

export const store = configureStore({
  reducer: { postList },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
