import { call, put, takeEvery } from 'redux-saga/effects';
import { postService } from 'shared/api/services';
import { getPostsFailure, getPostsSuccess } from './postSlice';
import { IPost } from 'shared/models';

function* fetchPostsWorker() {
  try {
    const posts: IPost[] = yield call(postService.getPostList);
    yield put(getPostsSuccess(posts));
  } catch (e) {
    console.log('ошибка апи');
    yield put(getPostsFailure());
  }
}

function* postsWathcer() {
  yield takeEvery('posts/getPostsFetch', fetchPostsWorker);
}

export default postsWathcer;
