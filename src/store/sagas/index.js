import { put, call, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions/action-types';
import { chatBotAPI } from '../../utils';

export default function * root() {
  yield takeLatest(actions.GET_BOT_MESSAGE, fetchApiMessage);
};

function * fetchApiMessage(action) {
  try {
    const { message } = action;

    let payload = {
      messageListElement: [
        {
          sender: 'user',
          message: message,
        },
      ],
    };

    yield put({ type: actions.APPEND_MESSAGE, payload });

    const botMessage = yield call(chatBotApiPromiseWrapper, message);
    payload = {
      messageListElement: [
        {
          sender: 'bot',
          message: botMessage.message.message,
        },
      ],
      chatBotName: botMessage.message.chatBotName,
      chatBotDescription: botMessage.message.chatBotID,
    };

    yield put({ type: actions.APPEND_MESSAGE, payload });
  } catch (err){

  }
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
