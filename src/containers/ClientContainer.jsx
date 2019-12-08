import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

//import DashboardClient from "../containers/DashboardClient";
import ClientJobPostings from "./ClientJobPostings";
import NewJobPostingForm from "../components/NewJobPostingForm";

function ClientContainer() {
  //<Route path="/auth/client/dashboard" component={DashboardClient} />
  return (
    <Switch>
      <Route
        path="/auth/client/jobpostings/new"
        component={NewJobPostingForm}
      />
      <Route path="/auth/client/jobpostings" component={ClientJobPostings} />
      <Redirect path="/" to="/auth/client/jobpostings" />
    </Switch>
  );
}

export default connect(
  null,
  null
)(ClientContainer);
