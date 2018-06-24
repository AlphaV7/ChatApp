import { put, call, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions/action-types';
import { chatBotAPI } from '../../utils';

export default function * root() {
  yield takeLatest(actions.GET_BOT_MESSAGE, fetchApiMessage);
};

function * fetchApiMessage(action) {
  const { message } = action;

  const botMessage = yield call(chatBotApiPromiseWrapper, message);

  yield put({ type: actions.APPEND_MESSAGE, botMessage});
}

function * chatBotApiPromiseWrapper(message){
  const promise = yield new Promise((resolve, reject) => {
    chatBotAPI({}, message, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

  return promise;
}
