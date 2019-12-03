import { FETCH_RECRUITERS } from "../constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECRUITERS:
      return [...action.payload];
    default:
      return [...state];
  }
};
