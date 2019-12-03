import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminDashboard from "../containers/AdminDashboard";
import AdminClients from "./AdminClients";
import AdminRecruiters from "./AdminRecruiters";

function AdminContainer(props) {
  return (
    <Switch>
      <Route path="/auth/admin/dashboard" component={AdminDashboard} />
      <Route path="/auth/admin/clients" component={AdminClients} />
      <Route path="/auth/admin/recruiters" component={AdminRecruiters} />
      <Route path="/auth/admin/candidates" component={AdminDashboard} />
      <Route path="/auth/admin/admins" component={AdminDashboard} />
      <Redirect path="/" to="/auth/admin/dashboard" />
    </Switch>
  );
}

export default connect(null, null)(AdminContainer);
