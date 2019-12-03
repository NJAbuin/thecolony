import axios from "axios";
import { FETCH_RECRUITERS } from "../constants";

export const fetchRecruiters = payload => ({
  type: FETCH_RECRUITERS,
  payload
});

export const fetchRecruiterList = () => dispatch => {
  console.log(FETCH_RECRUITERS);
  axios
    .get(`/api/admin/recruiters`)
    .then(res => res.data)
    .then(recruiters => dispatch(fetchRecruiters(recruiters)));
};
