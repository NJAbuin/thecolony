import axios from "axios";
import {
  FETCH_JOB_POSTINGS,
  JOB_POSTING_SELECT,
  DELETE_JOBPOSTING
} from "../constants";

export const jobPostings = payload => ({
  type: FETCH_JOB_POSTINGS,
  payload
});

export const jobPosting = payload => ({
  type: FETCH_JOB_POSTING,
  payload
});

export const getJobPostings = () => dispatch =>
  axios
    .get("/api/jobpostings")
    .then(res => res.data)
    .then(candList => dispatch(jobPostings(candList)));

export const selectJobPost = jobPost => ({
  type: JOB_POSTING_SELECT,
  jobPost
});

export const selectJobPostToState = id => dispatch =>
  axios
    .get(`/api/jobpostings/${id}`)
    .then(res => {
      return res.data;
    })
    .then(jobPost => dispatch(selectJobPost(jobPost)));

export const deleteJobPostAction = jobpost => ({
  type: DELETE_JOBPOSTING,
  jobpost
});

export const deleteJobPosting = id => dispatch =>
  axios
    .delete(`/api/jobpostings/delete/${id}`)
    .then(res => dispatch(deleteJobPostAction(res.data)))
    .catch(console.error());
