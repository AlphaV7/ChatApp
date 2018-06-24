import * as actions from '../actions/index';

const defaultState = {
  messageListElements: [],
};

const rootReducer = function(state = defaultState, action) {
  const { payload } = action;

  switch (action.type) {
    case actions.APPEND_MESSAGE: {
      return { ...state, messageListElements: state.messageListElements.push(payload) };
    }
    default: {
      return { ...state };
    }
  }
};

export default rootReducer;
