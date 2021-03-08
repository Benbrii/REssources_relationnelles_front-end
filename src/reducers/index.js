import { combineReducers } from "redux";
import registerReducer from "./reducer_register";
import connectReducer from "./reducer_connection";
import adminReducer from "./reducer_admin";
import ressource from "./ressource.reducer";

export default combineReducers({
  ressource,
  registerReducer,
  connectReducer,
  adminReducer
});
