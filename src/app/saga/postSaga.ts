import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getPostQueries, postService } from 'shared/api/services';
import {
  getPostsFailure,
  getPostsFetch,
  getPostsSuccess,
  setFetching,
} from '../redux/slices/postSlice';
import { IPost } from 'shared/models';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { resetCurrentPage, setCurrentPage, setTotalPages } from 'app/redux/slices/paginationSlice';

function* workFetchPosts(action: PayloadAction<getPostQueries>) {
  try {
    yield put(setFetching());
    yield delay(1000);
    const posts: AxiosResponse<IPost[], any> = yield call(postService.getPostList, action.payload);
    yield put(getPostsSuccess(posts.data));
    yield put(setTotalPages(Math.ceil(posts.headers['x-total-count'] / 10)));
    yield console.log(Math.ceil(posts.headers['x-total-count'] / 10));
  } catch (e) {
    console.log('ошибка апи');
    yield put(getPostsFailure());
  }
}

function* workPaginatePosts(action: PayloadAction<getPostQueries>) {
  try {
    const posts: AxiosResponse<IPost[], any> = yield call(postService.getPostList, action.payload);
    yield put(setFetching());
    yield delay(1000);
    yield put(getPostsSuccess(posts.data));
    yield console.log(Math.ceil(posts.headers['x-total-count'] / 10));
  } catch (e) {
    console.log('ошибка апи');
    yield put(getPostsFailure());
  }
}

function* workSearchPosts(action: PayloadAction<getPostQueries>) {
  yield delay(500);
  try {
    const posts: AxiosResponse<IPost[], any> = yield call(postService.getPostList, action.payload);
    yield put(getPostsSuccess(posts.data));
    yield put(resetCurrentPage());
    yield put(setTotalPages(Math.ceil(posts.headers['x-total-count'] / 10)));
  } catch (e) {
    console.log('ошибка апи');
    yield put(getPostsFailure());
  }
}

function* workSortPosts(action: PayloadAction<getPostQueries>) {
  try {
    const posts: AxiosResponse<IPost[], any> = yield call(postService.getPostList, action.payload);
    yield put(getPostsSuccess(posts.data));
  } catch (e) {
    console.log('ошибка апи');
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
