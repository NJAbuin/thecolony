import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import { AuthGrid } from "../templates/LayoutGrids";
import RecruiterContainer from "./RecruiterContainer";

import Sidebar from "../components/Sidebar";
import AdminContainer from "./AdminContainer";

function AuthContainer(props) {
  useEffect(() => {
    if (props.location.path) {
      if (`${props.location.path}/${props.user.type}` !== `/auth/${props.user.type}`)
        props.history.replace(`/auth/${props.user.type}`)
    }
  }, [props.location])

  return (
    <AuthGrid>
      <Sidebar />
      <Switch>
        <Route path="/auth/admin" component={AdminContainer} />
        <Route path="/auth/recruiter" component={RecruiterContainer} />
      </Switch>
    </AuthGrid>
  );
}

export default withRouter(AuthContainer);
