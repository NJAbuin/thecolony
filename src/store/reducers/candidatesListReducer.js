import { FETCH_CANDIDATES } from "../constants";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CANDIDATES:
            return [...action.payload]

        default:
            return state;
    }
};
