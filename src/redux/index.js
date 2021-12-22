import { combineReducers } from "redux";
import { reducer as userInfoReducer } from "./userInfo/reducer";

const reducers = combineReducers({
  userInfo: userInfoReducer,
});

export default reducers;
