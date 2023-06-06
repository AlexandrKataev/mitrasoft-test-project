import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import posts from './slices/postSlice';
import search from './slices/searchSlice';
import postSaga from '../saga/postSaga';
import sort from './slices/sortSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { posts, search, sort },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(postSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
