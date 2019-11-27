import { CANDIDATE_ADD, CANDIDATE_REMOVE, CANDIDATES_SUBMIT_OR_EMPTY } from "../constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case CANDIDATE_ADD:
      return [...state, action.payload];

    case CANDIDATE_REMOVE:
      const newState = state.filter(candidate => candidate.id !== action.payload.id);
      return [...newState];

    case CANDIDATES_SUBMIT_OR_EMPTY:
      return state = []

    default:
      return state;
  }
};
