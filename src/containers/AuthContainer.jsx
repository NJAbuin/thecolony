import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { AuthGrid } from "../templates/AuthGrid";
import DashboardAdmin from "./DashboardAdmin";
//import DashboardClient from "./DashboardClient";
import DashboardRecruiter from "./DashboardClient";

import Sidebar from "../components/Sidebar";

function AuthContainer(props) {
  // !!! IF UNAUTH, REDIR TO HOME
  // can be done with private route jsx, might be easier

  //needs a function to do redirect depending on
  // auth permissions

  useEffect(() => {
    const { user, history } = props;
    if (user.userType === "Admin") history.push("/auth/admin");
    if (user.userType === "Client") history.push("/auth/client");
    if (user.userType === "Recruiter") history.push("/auth/recruiter");
  }, []);

  return (
    <AuthGrid>
      <Sidebar />
      <Switch>
        <Route path="/auth/admin" component={DashboardAdmin} />
        <Route path="/auth/recruiter" component={DashboardRecruiter} />
        {/* <R path="/auth/Client" component={DashboardClient} />  */}
      </Switch>
    </AuthGrid>
  );
}

export default connect()(AuthContainer);
