import { PayloadAction } from '@reduxjs/toolkit';
import { getCommentsFailure, getCommentsSuccess } from 'app/redux/slices/commentSlice';

import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { commentService } from 'shared/api/services';
import { IComment } from 'shared/models';

function* workFetchComments(action: PayloadAction<string>) {
  try {
    const comments: IComment[] = yield call(commentService.getPostComments, action.payload);
    yield delay(500);
    yield put(getCommentsSuccess(comments));
  } catch (e) {
    alert('Ошибка сервера');
    yield put(getCommentsFailure());
  }
}

function* commentsWathcer() {
  yield takeLatest('comments/getCommentsFetch', workFetchComments);
}

export default commentsWathcer;
