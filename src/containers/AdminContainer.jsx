import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminDashboard from "../containers/AdminDashboard";
import AdminClients from "./AdminClients";
import AdminJobPosting from "./AdminJobPosting";
import JobPostingDetails from "../components/JobPostingDetails";
import NewJobPostingForm from "../components/NewJobPostingForm";
import AdminRecruiters from "./AdminRecruiters";

function AdminContainer(props) {
  return (
    <Switch>
      <Route path="/auth/admin/dashboard" component={AdminDashboard} />
      <Route path="/auth/admin/clients" component={AdminClients} />
      <Route
        path="/auth/admin/jobposting/edit/:id"
        component={NewJobPostingForm}
      />
      <Route path="/auth/admin/jobposting/:id" component={JobPostingDetails} />
      <Route path="/auth/admin/jobposting" component={AdminJobPosting} />

      <Redirect path="/" to="/auth/admin/dashboard" />
    </Switch>
  );
}

export default connect(null, null)(AdminContainer);
