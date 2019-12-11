import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import JobPostingDetails from "../components/JobPostingDetails";

//import DashboardClient from "../containers/DashboardClient";
import ClientJobPostings from "./ClientJobPostings";
import NewJobPostingForm from "../components/NewJobPostingForm";
import CandidateDetails from "../components/CandidateDetails";

function ClientContainer() {
  //<Route path="/auth/client/dashboard" component={DashboardClient} />
  return (
    <Switch>
      <Route
        path="/auth/client/jobpostings/new"
        component={NewJobPostingForm}
      />
      <Route
        path="/auth/client/jobpostings/:id"
        component={JobPostingDetails}
      />
      <Route path="/auth/client/jobpostings" component={ClientJobPostings} />
      <Route path="/auth/client/candidates/:id" component={CandidateDetails} />
      <Redirect path="/" to="/auth/client/jobpostings" />
    </Switch>
  );
}

export default connect(null, null)(ClientContainer);
