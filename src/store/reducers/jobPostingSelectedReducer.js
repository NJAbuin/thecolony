import { JOB_POSTING_SELECT, DELETE_JOBPOSTING } from "../constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case JOB_POSTING_SELECT:
      return { ...action.jobPost };
    case DELETE_JOBPOSTING:
      return {};
    default:
      return state;
  }
};
