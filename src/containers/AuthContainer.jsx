import React from "react";
import { connect } from "react-redux";
import { Route as R, Switch } from "react-router-dom";

import { AuthGrid } from "../templates/AuthGrid";
import DashboardAdmin from "./DashboardAdmin";

export default function AuthContainer(props) {
  //needs a function to do redirect depending on
  // auth permissions
  return (
    <AuthGrid>
      <Switch>
        <div style={{ gridArea: "sidebar", background: "purple" }}></div>
        <div style={{ gridArea: "content", background: "yellow" }}></div>
        <R path="/auth/admin" component={DashboardAdmin} />
        <R path="/auth/recruiter" />
        <R path="/auth/business" />
      </Switch>
    </AuthGrid>
  );
}
