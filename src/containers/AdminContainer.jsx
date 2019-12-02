import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminDashboard from "../containers/AdminDashboard";

function AdminContainer(props) {
  return (
    <Switch>
      <Route path="/auth/admin/dashboard" component={AdminDashboard} />
      <Redirect path="/" to="/auth/admin/dashboard" />
    </Switch>
  );
}

export default connect(null)(AdminContainer);
