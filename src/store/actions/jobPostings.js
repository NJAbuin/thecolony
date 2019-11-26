import axios from "axios";
import { FETCH_JOB_POSTINGS, JOB_POSTING_SELECT } from "../constants";


export const jobPostings = (payload) => ({
    type: FETCH_JOB_POSTINGS,
    payload
});

export const getJobPostings = () => dispatch =>
    axios
        .get("/api/recruiter/jobpostings")
        .then(res => res.data)
        .then(candList => dispatch(jobPostings(candList)));

export const selectJobPost = id => ({
    type: JOB_POSTING_SELECT,
    id
})

export const selectJobPostToState = () => dispatch => console.log()