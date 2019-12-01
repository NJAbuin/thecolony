import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { AuthGrid } from "../templates/LayoutGrids";
import RecruiterContainer from "./RecruiterContainer";

import Sidebar from "../components/Sidebar";
import AdminContainer from "./AdminContainer";

function AuthContainer({ user, location, history }) {
  useEffect(() => {
    if (location.path) {
      if (`${location.path}/${user.type}` !== `/auth/${user.type}`)
        history.replace(`/auth/${user.type}`);
    }
  }, [location]);

  return (
    <AuthGrid>
      <Sidebar userType={user.type} />
      <Switch>
        <Route path="/auth/admin" component={AdminContainer} />
        <Route path="/auth/recruiter" component={RecruiterContainer} />
      </Switch>
    </AuthGrid>
  );
}

export default AuthContainer;
