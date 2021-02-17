import { combineReducers } from "redux";
import registerReducer from "./reducer_register";
import connectReducer from "./reducer_connection";
import authReducer from "./reducer_auth";

import ressource from "./ressource.reducer";

export default combineReducers({
  ressource,
  registerReducer,
  connectReducer,
  authReducer
});
