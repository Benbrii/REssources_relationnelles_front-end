import { combineReducers } from "redux";
import registerReducer from "./reducer_register";
import connectReducer from "./reducer_connection";
import adminReducer from "./reducer_admin";
import messageReducer from "./message.reducer"
import ressource from "./ressource.reducer";
import userReducer from "./user.reducer";
import statReducer from "./stat.reducer";

export default combineReducers({
  ressource,
  registerReducer,
  connectReducer,
  adminReducer,
  messageReducer,
  userReducer,
  statReducer
});
