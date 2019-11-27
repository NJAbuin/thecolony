import axios from "axios";
import { FETCH_JOB_POSTINGS, FETCH_JOB_POSTING } from "../constants";


export const jobPostings = (payload) => ({
    type: FETCH_JOB_POSTINGS,
    payload
});


export const jobPosting = (payload) => ({
    type: FETCH_JOB_POSTING,
    payload
});

export const getJobPostings = () => dispatch =>
    axios
        .get("/api/recruiter/jobpostings")
        .then(res => res.data)
        .then(candList => dispatch(jobPostings(candList)));

export const getJobPostingDetails = (id) => dispatch =>
    axios
        .get("/api/recruiter/jobpostings/" + id)
        .then(res => res.data)
        .then(candList => dispatch(jobPosting(candList)));
