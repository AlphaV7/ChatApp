import { GET_BOT_MESSAGE, SET_DEFAULT_VALUE, GET_LOCAL_STORAGE, SET_LOCAL_STORAGE } from './action-types';

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

export const setLocalStorage = (storageObject) => {
  return {
    type: SET_LOCAL_STORAGE,
    storageObject,
  };
};

export const getLocalStorage = (key) => {
  return {
    type: GET_LOCAL_STORAGE,
    key,
  };
};

export { GET_BOT_MESSAGE, LOADING_BOT_MESSAGE, LOADED_BOT_MESSAGE, SET_DEFAULT_VALUE,
  APPEND_MESSAGE, SET_LOCAL_STORAGE, GET_LOCAL_STORAGE } from './action-types';
