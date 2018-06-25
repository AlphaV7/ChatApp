import * as actions from '../actions/index';
import { fetchLocalStorage } from '../../utils';

const defaultState = {
  messageListElements: [],
  chatBotDescription: 'send a message to match to one',
  chatBotName: 'Finding Bot...',
};

const rootReducer = function(state = defaultState, action) {
  const { payload } = action;

  switch (action.type) {
    case actions.APPEND_MESSAGE: {
      const { messageListElement, chatBotName, chatBotDescription} = payload;

      const updatedState = {
        messageListElements: [ ...state.messageListElements, ...messageListElement ],
      };

      if (chatBotName && chatBotName !== state.chatBotName) {
        updatedState.chatBotName = chatBotName;
        updatedState.chatBotDescription = chatBotDescription;
      }

      return { ...state, ...updatedState };
    }
    case actions.GET_LOCAL_STORAGE: {
      const { key } = action;
      const messageListElements = fetchLocalStorage(key);

      return { ...state, messageListElements: messageListElements || [] };
    }
    default: {
      return { ...state };
    }
  }
};

export default rootReducer;
