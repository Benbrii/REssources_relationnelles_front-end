import { combineReducers } from "redux";
import registerReducer from "./reducer_register";
import ressource from "./ressource.reducer";

export default combineReducers({
  ressource,
  registerReducer,
});
