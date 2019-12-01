//node modules
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//components / containers
import AuthContainer from "./AuthContainer";

import PrivateRoute from "../components/PrivateRoute";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";

//styles
import { MainGrid } from "../templates/LayoutGrids";

//actions
import { fetchSession } from "../store/actions/session";

function Main({ user, fetchSession, history }) {
  useEffect(() => {
    fetchSession();
    if (user.type) history.replace(`/auth/${user.type}/jobpostings`);
  }, [user.type]);

  return (
    <ThemeProvider theme={theme}>
      <MainGrid>
        <Navbar />
        <Switch>
          <Route path="/landing" component={Landing} />
          <PrivateRoute path="/auth" component={AuthContainer} user={user} />
          <Redirect path="/" to="/landing" />
        </Switch>
      </MainGrid>
    </ThemeProvider>
  );
}

const mapStateToProps = state => ({
  user: state.session.user
});

const mapDispatchToProps = { fetchSession };

const theme = {
  fontFamily: "PT Sans",
  fontSize: "1rem",
  color: "white",

  CeruleanBlue: "11, 119, 196",
  CoolGray: "102, 153, 196",
  SpanishOrange: "238, 185, 2",
  JadeGreen: "128, 222, 217",
  RichBlack: "5, 5, 7"
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
