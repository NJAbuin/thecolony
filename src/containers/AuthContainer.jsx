import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { AuthGrid } from "../templates/AuthGrid";
import DashboardAdmin from "./DashboardAdmin";
//import DashboardBusiness from "./DashboardBusiness";
import DashboardRecruiter from "./DashboardRecruiter";

import Sidebar from "../components/Sidebar";

function AuthContainer(props) {
  // !!! IF UNAUTH, REDIR TO HOME
  // can be done with private route jsx, might be easier

  //needs a function to do redirect depending on
  // auth permissions

  return (
    <AuthGrid>
      <Sidebar />
      <Switch>
        <Route path="/auth/admin" component={DashboardAdmin} />
        <Route path="/auth/recruiter" component={DashboardRecruiter} />
        {/* <R path="/auth/business" component={DashboardBusiness} />  */}
      </Switch>
    </AuthGrid>
  );
}

export default connect()(AuthContainer);
