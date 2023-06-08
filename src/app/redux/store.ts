import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import posts from './slices/postSlice';
import user from './slices/userSlice';
import comments from './slices/commentSlice';
import search from './slices/searchSlice';

import sort from './slices/sortSlice';
import pagination from './slices/paginationSlice';
import rootSaga from 'app/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { posts, user, comments, search, sort, pagination },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
