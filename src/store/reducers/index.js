import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import candidatesListReducer from './candidatesListReducer'
import jobPostingsReducer from './jobPostingsReducer'
import candidatesSelectedReducer from './candidatesSelectedReducer'
import jobPostingSelectedReducer from './jobPostingSelectedReducer'

const reducers = {
    session: sessionReducer,
    jobPostings: jobPostingsReducer,
    jobPostingSelected: jobPostingSelectedReducer,
    candidateList: candidatesListReducer,
    candidatesSelected: candidatesSelectedReducer
};

export default combineReducers(reducers);