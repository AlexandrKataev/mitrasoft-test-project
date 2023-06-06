import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { postService } from 'shared/api/services';
import { getPostsFailure, getPostsSuccess } from '../redux/slices/postSlice';
import { IPost } from 'shared/models';
import { PayloadAction } from '@reduxjs/toolkit';

function* searchPostsWorker(action: PayloadAction<string>) {
  yield delay(500);
  try {
    const posts: IPost[] = yield call(postService.getPostList, action.payload);
    yield put(getPostsSuccess(posts));
  } catch (e) {
    console.log('ошибка апи');
    yield put(getPostsFailure());
  }
}

function* searchWathcer() {
  yield takeLatest('filter/setSearchValue', searchPostsWorker);
}

export default searchWathcer;
