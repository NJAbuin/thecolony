import React from "react";
import { Route as R, Switch, Redirect } from "react-router-dom";

import { MainGrid } from "../templates/MainGrid";
import AuthContainer from "../containers/AuthContainer";
import Landing from "./Landing";
import Navbar from "../components/Navbar";

export default props => {
  let { location } = props;
  return (
    <MainGrid>
      <Navbar />

      <Switch>
        {location.pathname === "/landing" ? (
          <R path="/landing" component={Landing} />
        ) : null}

        <R path="/auth" component={AuthContainer} />
        <Redirect path="/" to="/landing" />
      </Switch>
    </MainGrid>
  );
};
