import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { postService } from 'shared/api/services';
import { getPostsFailure, getPostsSuccess } from '../redux/slices/postSlice';
import { IPost } from 'shared/models';
import { PayloadAction } from '@reduxjs/toolkit';

function* fetchPostsWorker(action: PayloadAction<string>) {
  try {
    const posts: IPost[] = yield call(postService.getPostList, action.payload);
    yield put(getPostsSuccess(posts));
  } catch (e) {
    console.log('ошибка апи');
    yield put(getPostsFailure());
  }
}

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

function* sortPostsWorker(action: PayloadAction<string>) {
  try {
    const posts: IPost[] = yield call(postService.getPostList, action.payload);
    yield put(getPostsSuccess(posts));
  } catch (e) {
    console.log('ошибка апи');
    yield put(getPostsFailure());
  }
}

function* postsWathcer() {
  yield takeEvery('posts/getPostsFetch', fetchPostsWorker);
  // yield takeLatest('search/setSearchValue', searchPostsWorker);
  yield takeEvery('sort/setSortBy', sortPostsWorker);
}

export default postsWathcer;
