import { LOG_IN, LOG_OUT } from "../constants";

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, user: action.credentials };
    case LOG_OUT:
      return { ...state, user: {} };

    default:
      return state;
  }
};
