import { CANDIDATE_ADD, CANDIDATE_REMOVE } from "../constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case CANDIDATE_ADD:
      return [...state, action.payload];

    default:
      return state;
  }
};
