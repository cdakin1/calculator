import { combineReducers } from "redux";
import calculation from "./calculation";
import memory from "./memory";

export default combineReducers({
  calculation,
  memory
});
