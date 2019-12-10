import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import AdminAdmins from "./AdminAdmins";
import AdminClients from "./AdminClients";
import AdminCandidates from "./AdminCandidates";
import AdminDashboard from "../containers/AdminDashboard";
import AdminJobPosting from "./AdminJobPosting";
import AdminRecruiters from "./AdminRecruiters";
import CandidateDetails from "../components/CandidateDetails";

import JobPostingDetails from "../components/JobPostingDetails";
import NewJobPostingForm from "../components/NewJobPostingForm";
import RecruiterClientEditForm from "../components/RecruiterClientEditForm";

function AdminContainer(props) {
  //<Route path="/auth/admin/dashboard" component={AdminDashboard} />
  return (
    <Switch>
      <Route path="/auth/admin/admins" component={AdminAdmins} />
      <Route path="/auth/admin/candidates/:id" component={CandidateDetails} />
      <Route path="/auth/admin/candidates" component={AdminCandidates} />
      <Route
        path="/auth/admin/clients/:id"
        component={RecruiterClientEditForm}
      />
      <Route path="/auth/admin/clients" component={AdminClients} />
      <Route
        path="/auth/admin/jobpostings/edit/:id"
        component={NewJobPostingForm}
      />
      <Route path="/auth/admin/jobpostings/new" component={NewJobPostingForm} />

      <Route path="/auth/admin/jobpostings/:id" component={JobPostingDetails} />
      <Route path="/auth/admin/jobpostings" component={AdminJobPosting} />
      <Route
        path="/auth/admin/recruiters/:id"
        component={RecruiterClientEditForm}
      />
      <Route path="/auth/admin/recruiters" component={AdminRecruiters} />

      <Redirect path="/" to="/auth/admin/clients" />
    </Switch>
  );
}

export default connect(null, null)(AdminContainer);
