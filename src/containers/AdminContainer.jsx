import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import AdminClients from "./AdminClients";
import AdminCandidates from './AdminCandidates'
import AdminDashboard from "../containers/AdminDashboard";
import AdminJobPosting from "./AdminJobPosting";
import AdminRecruiters from "./AdminRecruiters";

import JobPostingDetails from "../components/JobPostingDetails";
import NewJobPostingForm from "../components/NewJobPostingForm";

function AdminContainer(props) {
  return (
    <Switch>
      <Route path="/auth/admin/dashboard" component={AdminDashboard} />
      <Route path="/auth/admin/candidates" component={AdminCandidates} />
      <Route path="/auth/admin/clients" component={AdminClients} />
      <Route
        path="/auth/admin/jobpostings/edit/:id"
        component={NewJobPostingForm}
      />
      <Route path="/auth/admin/recruiters" component={AdminRecruiters}></Route>
      <Route path="/auth/admin/jobpostings/:id" component={JobPostingDetails} />
      <Route path="/auth/admin/jobpostings" component={AdminJobPosting} />

      <Redirect path="/" to="/auth/admin/dashboard" />
    </Switch>
  );
}

export default connect(null, null)(AdminContainer);
