import { FETCH_CANDIDATE_DETAILS } from "../constants";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CANDIDATE_DETAILS:
            return { ...action.payload }

        default:
            return state;
    }
};
