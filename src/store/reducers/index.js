import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import candidatesListReducer from "./candidatesListReducer";
import jobPostingsReducer from "./jobPostingsReducer";
import candidatesSelectedReducer from "./candidatesSelectedReducer";
import jobPostingSelectedReducer from "./jobPostingSelectedReducer";
import candidateDetailsReducer from "./candidateDetailsReducer";
import clientListReducer from "./clientListReducer";
import recruitersListReducer from "./recruitersListReducer";

const reducers = {
  session: sessionReducer,
  jobPostings: jobPostingsReducer,
  jobPostingSelected: jobPostingSelectedReducer,
  candidateDetails: candidateDetailsReducer,
  candidateList: candidatesListReducer,
  candidatesSelected: candidatesSelectedReducer,
  clientList: clientListReducer,
  recruitersList: recruitersListReducer
};

export default combineReducers(reducers);
