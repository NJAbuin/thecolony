import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import RecruiterJobPostings from "../containers/RecruiterJobPostings";
import RecruiterCandidates from "../components/RecruiterCandidates";
import JobPostingDetails from "../components/JobPostingDetails";
import DashboardRecruiter from "../containers/DashboardRecruiter";

import { getCandidateList } from "../store/actions/candidates";
import { getJobPostings } from "../store/actions/jobPostings";
import RecrNewCandidateForm from "../components/RecrNewCandidateForm";

function RecruiterContainer({ getCandidateList, getJobPostings }) {
  useEffect(() => {
    getCandidateList();
    getJobPostings();
  }, []);

  return (
    <Switch>
      <Route path="/auth/recruiter/dashboard" component={DashboardRecruiter} />
      <Route
        path="/auth/recruiter/jobpostings/:id"
        component={JobPostingDetails}
      />
      <Route
        path="/auth/recruiter/jobpostings"
        component={RecruiterJobPostings}
      />
      <Route
        path="/auth/recruiter/candidates/new"
        component={RecrNewCandidateForm}
      />
      <Route
        path="/auth/recruiter/candidates"
        component={RecruiterCandidates}
      />
      <Redirect path="/" to="/auth/recruiter/dashboard" />
    </Switch>
  );
}

const mapDispatchToProps = {
  getCandidateList,
  getJobPostings
};

export default connect(
  null,
  mapDispatchToProps
)(RecruiterContainer);
