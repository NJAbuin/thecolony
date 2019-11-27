import { CANDIDATE_ADD, CANDIDATE_REMOVE } from "../constants";
import Candidate from "../../components/Candidate";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case CANDIDATE_ADD:
      return [...state, action.payload];
    case CANDIDATE_REMOVE:
      let found = state.find(candidate => {
        return candidate.id == action.payload.id;
      });
      let newState = state.filter(candidate => candidate !== found);
      return [...newState];
    default:
      return state;
  }
};
