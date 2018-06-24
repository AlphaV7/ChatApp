import { GET_BOT_MESSAGE, SET_DEFAULT_VALUE } from './action-types';

export const getBotMessage = (message) => {
  return {
    type: GET_BOT_MESSAGE,
    message,
  };
};

export const setDefaultValue = () => {
  return {
    type: SET_DEFAULT_VALUE,
  };
};

export { GET_BOT_MESSAGE, LOADING_BOT_MESSAGE, LOADED_BOT_MESSAGE, SET_DEFAULT_VALUE,
  APPEND_MESSAGE } from './action-types';
