import React from "react";
import { Route as R, Switch, Redirect } from "react-router-dom";

import { HomeGrid } from "../templates/HomeGrid";
import AuthContainer from "../containers/AuthContainer";
import Landing from "./Landing";
import Navbar from "../components/Navbar";

export default function Main(props) {
  let { location } = props;
  return (
    <HomeGrid>
      <Navbar />

      <Switch>
        {location.pathname === "/landing" ? (
          <R path="/landing" component={Landing} />
        ) : null}

        <R path="/auth" component={AuthContainer} />

        <Redirect path="/" to="/landing" />
      </Switch>
    </HomeGrid>
  );
}
