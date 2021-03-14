import { SET_ERROR_MESSAGE, SET_GREAT_MESSAGE, CLEAR_MESSAGE } from "../const/message.const";

export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  payload: message,
});

export const setGreatMessage = (message) => ({
  type: SET_GREAT_MESSAGE,
  payload: message,
});


export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
