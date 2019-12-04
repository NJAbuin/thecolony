import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import DashboardClient from "../containers/DashboardClient";
import ClientJobPostings from './ClientJobPostings'

function ClientContainer() {
  return (
    <Switch>
      <Route path="/auth/client/dashboard" component={DashboardClient} />
      <Route path="/auth/client/jobpostings" component={ClientJobPostings} />

      {/* <Route path="/auth/client/jobpostings" component={NewJobPostingForm} /> */}

      <Redirect path="/" to="/auth/client/dashboard" />
    </Switch>
  );
}

export default connect(null, null)(ClientContainer);
