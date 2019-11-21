import React, { Fragment } from "react";
import { Route as R, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import { MainGrid } from "../templates/MainGrid";
import AuthContainer from "../containers/AuthContainer";

import Landing from "./Landing";
import Navbar from "../components/Navbar";

export default props => {
  return (
    <MainGrid>
      <Navbar />
      <Switch>
        <R path="/landing" component={Landing} />
        {/* {'Change route Auth to a Private Route later'} */}
        <R path="/auth" component={AuthContainer} />

        <Redirect exact path="/" to="/landing" />
      </Switch>
    </MainGrid>
  );
};
