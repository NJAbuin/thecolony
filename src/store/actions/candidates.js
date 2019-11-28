import axios from "axios";
import {
  FETCH_CANDIDATES,
  CANDIDATES_SUBMIT_OR_EMPTY,
  CANDIDATE_ADD,
  CANDIDATE_REMOVE
} from "../constants";

//Fetch all candidates
export const candidateList = payload => ({
  type: FETCH_CANDIDATES,
  payload
});

export const getCandidateList = () => dispatch =>
  axios
    .get("/api/recruiter/candidates")
    .then(res => res.data)
    .then(candList => dispatch(candidateList(candList)));

//apply to jobs
export const candidateAdd = payload => ({
  type: CANDIDATE_ADD,
  payload
});

export const candidateRemove = payload => ({
  type: CANDIDATE_REMOVE,
  payload
});

export const candidatesSumbitOrEmpty = payload => ({
  type: CANDIDATES_SUBMIT_OR_EMPTY
});

export const candidatesApplyToJob = (job, arrOfCandidates) => dispatch =>
  axios
    .post("/api/recruiter/jobpostings", {
      id: job.id,
      newCandidates: arrOfCandidates
    })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .then(candsApplied => dispatch(candidatesSumbitOrEmpty()));

export const candidatesClearListSelection = () => dispatch =>
  dispatch(candidatesSumbitOrEmpty());
