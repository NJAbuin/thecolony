import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import RecruiterJobPostings from "../containers/RecruiterJobPostings";
import RecruiterCandidates from "../components/RecruiterCandidates";
import JobPostingDetails from "../components/JobPostingDetails";

import { getCandidateList } from "../store/actions/candidates";
import { getJobPostings } from "../store/actions/jobPostings";
import RecrNewCandidateForm from "../components/RecrNewCandidateForm";

function RecruiterContainer(props) {
  useEffect(() => {
    props.getCandidateList();
    props.getJobPostings();
  }, []);

  return (
    <Switch>
      {/* <Route path="/auth/recruiter/dashboard" component={DashboardRecruiter} /> */}
      <Route
        exact
        path="/auth/recruiter/jobpostings/:id"
        component={JobPostingDetails}
      />
      <Route
        exact
        path="/auth/recruiter/jobpostings"
        component={RecruiterJobPostings}
      />
      <Route
        exact
        path="/auth/recruiter/candidates"
        component={RecruiterCandidates}
      />
      <Route
        exact
        path="/auth/recruiter/candidates/new"
        component={RecrNewCandidateForm}
      />
    </Switch>
  );
}

const mapDispatchToProps = {
  getCandidateList,
  getJobPostings
};

export default connect(null, mapDispatchToProps)(RecruiterContainer);
