import axios from "axios";
import { FETCH_RECRUITERS, SELECT_RECRUITER } from "../constants";

export const fetchRecruiters = payload => ({
  type: FETCH_RECRUITERS,
  payload
});


export const fetchRecruiterList = () => dispatch => {
  axios
    .get(`/api/admin/recruiters`)
    .then(res => res.data)
    .then(recruiters => dispatch(fetchRecruiters(recruiters)));
};

export const singleRecruiter = payload => ({
  type: SELECT_RECRUITER,
  payload
});

export const postSingleRecruiter = (id) => dispatch => {
  axios
    .get(`/api/recruiters/${id}`)
    .then(res => res.data)
    .then(recruiter => dispatch(singleRecruiter(recruiter)));
};
