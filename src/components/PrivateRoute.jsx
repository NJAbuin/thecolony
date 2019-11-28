import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...otherProps }) => (
  <Route
    {...otherProps}
    render={() =>
      Object.keys(otherProps.user).length ? (
        <Component {...otherProps} />
      ) : (
        <Redirect
          to={{ pathname: "/", state: { from: otherProps.location || "/" } }}
        />
      )
    }
  />
);
