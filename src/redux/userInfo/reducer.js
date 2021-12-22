import { ActionTypes } from "./types";

const initialValues = {
  userInfo: {},
  step: "",
};

export const reducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_STEP:
      return { ...state, step: payload };

    case ActionTypes.SET_USER:
      return { ...state, userInfo: { ...payload } };

    case ActionTypes.COMPLETE_USER_INFO:
      return {
        ...state,
        userInfo: { ...state.userInfo, ...payload },
      };

    case ActionTypes.RESET_VALUES:
      return {
        userInfo: {},
        step: "",
      };

    default:
      return state;
  }
};
