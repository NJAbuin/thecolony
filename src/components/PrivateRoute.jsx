import { Route as R, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...otherProps }) => (
  <R
    {...otherProps}
    render={props =>
      isAuthenticated() ? (
        <Component {...otherProps} />
      ) : (
        <Redirect
          to={{ pathname: "/", state: { from: props.location || "/" } }}
        />
      )
    }
  />
);
