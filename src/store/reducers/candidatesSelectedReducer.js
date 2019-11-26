import { CANDIDATE_ADD, CANDIDATE_REMOVE } from "../constants";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case CANDIDATE_ADD:
            return [...action.payload]

        case CANDIDATE_REMOVE:
            return [...action.payload]

        default:
            return state;
    }
};
