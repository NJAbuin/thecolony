import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const reducers = { userReducer };

export default combineReducers(reducers);
