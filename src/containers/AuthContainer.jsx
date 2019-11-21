import React from "react";
import { connect } from "react-redux";
import { Route as R, Switch } from "react-router-dom";

import { AuthGrid } from "../templates/AuthGrid";
import DashboardAdmin from "./DashboardAdmin";
//import DashboardBusiness from "./DashboardBusiness";
//import DashboardRecruiter from "./DashboardRecruiter";

import Sidebar from "../components/Sidebar";

export default function AuthContainer(props) {
  //needs a function to do redirect depending on
  // auth permissions

  return (
    <AuthGrid>
      <Sidebar />
      <Switch>
        <R path="/auth/admin" component={DashboardAdmin} />
        {/*         <R path="/auth/recruiter" component={DashboardRecruiter} />
        <R path="/auth/business" component={DashboardBusiness} /> */}
      </Switch>
    </AuthGrid>
  );
}
