import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminDashboard from "../containers/AdminDashboard";
import AdminClients from './AdminClients'
import { fetchClientList } from '../store/actions/clients'

function AdminContainer({ fetchClientList }) {

  useEffect(() => fetchClientList(), [])

  return (
    <Switch>
      <Route path="/auth/admin/dashboard" component={AdminDashboard} />
      <Route path="/auth/admin/clients" component={AdminClients} />
      {/* <Route path="/auth/admin/recruiters" component={AdminDashboard} />
      <Route path="/auth/admin/candidates" component={AdminDashboard} />
      <Route path="/auth/admin/admins" component={AdminDashboard} /> */}
      <Redirect path="/" to="/auth/admin/dashboard" />
    </Switch>
  );
}

const mapDispatchToProps = {
  fetchClientList
}

export default connect(null, mapDispatchToProps)(AdminContainer);
