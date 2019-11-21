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
        const Grid = styled.div` display: grid; grid-template-rows: 7.5% 1fr;
        grid-template-columns: 12.5% 1fr; grid-template-areas: "nav nav"
        "sidebar content"; height: 100vh; `;
        <Redirect exact path="/" to="/landing" />
      </Switch>
    </MainGrid>
  );
};

const mapStateToProps = () => {
  return { user };
};

const mapDispatchToProps = dispatch => ({});

export default connect(null, mapDispatchToProps)(Main);
