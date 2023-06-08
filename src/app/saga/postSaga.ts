import { AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';

import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { getPostQueries, postService } from 'shared/api/services';
import {
  getPostsFailure,
  getPostsSuccess,
  setFetching,
  resetCurrentPage,
  setTotalPages,
} from '../redux/slices';

import { IPost } from 'shared/models';

function* workFetchPosts(action: PayloadAction<getPostQueries>) {
  try {
    const posts: AxiosResponse<IPost[], any> = yield call(
      action.payload.userId === undefined ? postService.getPostList : postService.getUserPostList,
      action.payload,
    );
    yield delay(500);
    yield put(getPostsSuccess(posts.data));
    yield put(resetCurrentPage());
    yield put(setTotalPages(Math.ceil(posts.headers['x-total-count'] / 10)));
  } catch (e) {
    alert('Ошибка сервера');
    yield put(getPostsFailure());
  }
}

function* workPaginatePosts(action: PayloadAction<getPostQueries>) {
  try {
    const posts: AxiosResponse<IPost[], any> = yield call(
      action.payload.userId === undefined ? postService.getPostList : postService.getUserPostList,
      action.payload,
    );
    yield put(setFetching());
    yield delay(500);
    yield put(getPostsSuccess(posts.data));
  } catch (e) {
    alert('Ошибка сервера');
    yield put(getPostsFailure());
  }
}

function* workSearchPosts(action: PayloadAction<getPostQueries>) {
  yield delay(500);
  try {
    yield put(setFetching());
    const posts: AxiosResponse<IPost[], any> = yield call(
      action.payload.userId === undefined ? postService.getPostList : postService.getUserPostList,
      action.payload,
    );
    yield delay(500);
    yield put(getPostsSuccess(posts.data));
    yield put(resetCurrentPage());
    yield put(setTotalPages(Math.ceil(posts.headers['x-total-count'] / 10)));
  } catch (e) {
    alert('Ошибка сервера');
    yield put(getPostsFailure());
  }
}

function* workSortPosts(action: PayloadAction<getPostQueries>) {
  try {
    yield put(setFetching());
    yield delay(500);
    const posts: AxiosResponse<IPost[], any> = yield call(
      action.payload.userId === undefined ? postService.getPostList : postService.getUserPostList,
      action.payload,
    );
    yield put(getPostsSuccess(posts.data));
  } catch (e) {
    alert('Ошибка сервера');
    yield put(getPostsFailure());
  }
}

function* postsWathcer() {
  yield takeLatest('posts/getPostsFetch', workFetchPosts);
  yield takeLatest('pagination/setCurrentPage', workPaginatePosts);
  yield takeLatest('search/setSearchValue', workSearchPosts);
  yield takeLatest('sort/setSortBy', workSortPosts);
}

export default postsWathcer;
