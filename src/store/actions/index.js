import { GET_BOT_MESSAGE } from './action-types';

export const getBotMessage = (message) => {
  return {
    type: GET_BOT_MESSAGE,
    message,
  };
};

export { GET_BOT_MESSAGE, LOADING_BOT_MESSAGE, LOADED_BOT_MESSAGE,
  APPEND_MESSAGE } from './action-types';
