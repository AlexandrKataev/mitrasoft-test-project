import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import posts from './slices/postSlice';
import postSaga from './slices/postSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { posts },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(postSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
