import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRouteAuth = ({ component: Component, ...otherProps }) => (
  <Route
    {...otherProps}
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
