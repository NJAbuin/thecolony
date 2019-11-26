import axios from "axios";
import { FETCH_JOB_POSTINGS } from "../constants";


export const jobPostings = (payload) => ({
    type: FETCH_JOB_POSTINGS,
    payload
});

export const getJobPostings = () => dispatch =>
    axios
        .get("/api/recruiter/jobpostings")
        .then(res => res.data)
        .then(candList => dispatch(jobPostings(candList)));
