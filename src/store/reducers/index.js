import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import candidatesListReducer from './candidatesListReducer'
import jobPostingsReducer from './jobPostingsReducer'

const reducers = {
    session: sessionReducer,
    candidateList: candidatesListReducer,
    jobPostings: jobPostingsReducer
};

export default combineReducers(reducers);