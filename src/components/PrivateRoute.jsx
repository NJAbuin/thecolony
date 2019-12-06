import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ component: Component, path, loading, ...otherProps }) => (
  <Route
    {...path}
    render={() => {
      if (loading) return <p>Loading!!!</p>
      if (otherProps.user.type) return <Component {...otherProps} />

      return <Redirect
        to={{ pathname: "/", state: { from: otherProps.location || "/" } }}
      />
    }
    }
  />
);
