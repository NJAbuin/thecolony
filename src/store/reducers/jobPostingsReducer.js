import { FETCH_JOB_POSTINGS, FETCH_JOB_POSTING } from "../constants";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOB_POSTINGS:
            return [...action.payload]
        default:
            return state;
    }
};
