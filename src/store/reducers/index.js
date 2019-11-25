import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import candidatesListReducer from './candidatesListReducer'

const reducers = {
    session: sessionReducer,
    candidateList: candidatesListReducer
};

export default combineReducers(reducers);