import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import candidatesListReducer from "./candidatesListReducer";
import jobPostingsReducer from "./jobPostingsReducer";
import candidatesSelectedReducer from "./candidatesSelectedReducer";
import jobPostingSelectedReducer from "./jobPostingSelectedReducer";
import candidateDetailsReducer from "./candidateDetailsReducer";
import clientListReducer from "./clientListReducer";
import recruitersListReducer from "./recruitersListReducer";
import recruiterSelectReducer from "./recruiterSelectReducer";
import adminListReducer from "./adminListReducer";
import clientSelectReducer from "./clientSelectReducer";

const reducers = {
  session: sessionReducer,
  adminList: adminListReducer,
  jobPostings: jobPostingsReducer,
  jobPostingSelected: jobPostingSelectedReducer,
  candidateDetails: candidateDetailsReducer,
  candidateList: candidatesListReducer,
  candidatesSelected: candidatesSelectedReducer,
  clientSelected: clientSelectReducer,
  clientList: clientListReducer,
  recruiterSelected: recruiterSelectReducer,
  recruitersList: recruitersListReducer
};

export default combineReducers(reducers);
