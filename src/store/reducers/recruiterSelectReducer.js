import { SELECT_RECRUITER } from "../constants";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_RECRUITER:
            return { ...action.payload };

        default:
            return state;
    }
};
