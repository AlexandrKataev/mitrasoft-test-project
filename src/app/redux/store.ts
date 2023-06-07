import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import posts from './slices/postSlice';
import search from './slices/searchSlice';
import postSaga from '../saga/postSaga';
import sort from './slices/sortSlice';
import pagination from './slices/paginationSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { posts, search, sort, pagination },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(postSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
