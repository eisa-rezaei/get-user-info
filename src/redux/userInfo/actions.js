import { ActionTypes } from "./types";

export const setStep = (payload) => {
  return {
    type: ActionTypes.SET_STEP,
    payload,
  };
};
export const setUser = (payload) => {
  return {
    type: ActionTypes.SET_USER,
    payload,
  };
};
export const completeUsersInfo = (payload) => {
  return {
    type: ActionTypes.COMPLETE_USER_INFO,
    payload,
  };
};

export const reSetValues = () => {
  return {
    type: ActionTypes.RESET_VALUES,
  };
};
