import { JOB_POSTING_SELECT } from "../constants";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case JOB_POSTING_SELECT:
            return { ...action.jobPost }

        default:
            return state;
    }
};
