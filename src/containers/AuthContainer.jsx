import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import { AuthGrid } from "../templates/LayoutGrids";
import RecruiterContainer from "./RecruiterContainer";

import Sidebar from "../components/Sidebar";
import AdminContainer from "./AdminContainer";

function AuthContainer(props) {
  const { user } = props;
  useEffect(() => {
    if (props.location.path) {
      if (`${props.location.path}/${user.type}` !== `/auth/${user.type}`)
        props.history.replace(`/auth/${user.type}`);
    }
  }, [props.location]);

  return (
    <AuthGrid>
      <Sidebar type={user.type} />
      <Switch>
        <Route path="/auth/admin" component={AdminContainer} />
        <Route path="/auth/recruiter" component={RecruiterContainer} />
      </Switch>
    </AuthGrid>
  );
}

export default withRouter(AuthContainer);
