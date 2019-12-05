import { FETCH_ADMINS } from "../constants";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ADMINS:
            return [...action.payload]

        default:
            return state;
    }
};
