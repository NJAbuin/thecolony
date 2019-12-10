import { SELECT_RECRUITER, EMPTY_RECRUITER } from "../constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_RECRUITER:
      return { ...action.payload };
    case EMPTY_RECRUITER:
      return {};
    default:
      return state;
  }
};
