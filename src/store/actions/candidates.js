import axios from "axios";
import { FETCH_CANDIDATES } from "../constants";


export const candidateList = (payload) => ({
    type: FETCH_CANDIDATES,
    payload
});

export const getCandidateList = () => dispatch =>
    axios
        .get("/api/recruiter/candidates")
        .then(res => res.data)
        .then(candList => dispatch(candidateList(candList)));
