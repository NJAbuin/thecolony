import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { AuthGrid } from "../templates/LayoutGrids";
import DashboardAdmin from "./DashboardAdmin";
import RecruiterContainer from './RecruiterContainer'

import Sidebar from "../components/Sidebar";
import RecrNewCandidateForm from "../components/RecrNewCandidateForm";




function AuthContainer(props) {
  // !!! IF UNAUTH, REDIR TO HOME
  // can be done with private route jsx, might be easier

  //needs a function to do redirect depending on
  // auth permissions
  /*
  useEffect(() => {
    const { user, history } = props;
    if (user.type === "Admin") history.push("/auth/admin");
    if (user.type === "Client") history.push("/auth/client");
    if (user.type === "Recruiter") history.push("/auth/recruiter");
  }, []);
*/
  return (
    <AuthGrid>
      <Sidebar />
      <Switch>
        {/* <Route path="/auth/admin" component={DashboardAdmin} /> */}
        <Route path="/auth/recruiter" component={RecruiterContainer} />
      </Switch>
    </AuthGrid>
  );
}

export default connect()(AuthContainer);
