import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { AuthGrid } from "../templates/LayoutGrids";
import DashboardAdmin from "./DashboardAdmin";
import RecruiterContainer from "./RecruiterContainer";

import Sidebar from "../components/Sidebar";
import RecrNewCandidateForm from "../components/RecrNewCandidateForm";

function AuthContainer(props) {
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
