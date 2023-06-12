import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import posts from './slices/postSlice';
import comments from './slices/commentSlice';

import rootSaga from 'app/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { posts, comments },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
