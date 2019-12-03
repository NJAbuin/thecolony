import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import DashboardClient from "../containers/DashboardClient";
import NewJobPostingForm from "../components/NewJobPostingForm";

function ClientContainer() {
  return (
    <Switch>
      <Route path="/auth/client/dashboard" component={DashboardClient} />
      <Route path="/auth/client/jobposting" component={NewJobPostingForm} />

      <Redirect path="/" to="/auth/client/dashboard" />
    </Switch>
  );
}

export default connect(null, null)(ClientContainer);
