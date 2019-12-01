import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ component: Component, path, ...otherProps }) => (
  <Route
    {...path}
    render={() =>
      otherProps.user.type ? (
        <Component {...otherProps} />
      ) : (
        <Redirect
          to={{ pathname: "/", state: { from: otherProps.location || "/" } }}
        />
      )
    }
  />
);
