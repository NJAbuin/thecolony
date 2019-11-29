//node modules
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//components / containers
import AuthContainer from "./AuthContainer";

import { PrivateRouteAuth } from "../components/PrivateRouteAuth";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";

//styles
import { MainGrid } from "../templates/LayoutGrids";

//actions
import { fetchSession } from "../store/actions/session";

function Main(props) {
  const { user, fetchSession, history } = props;
  useEffect(() => {
    switch (user.type) {
      case "Recruiter":
        history.replace("/auth/recruiter/jobpostings");
        break;
      case "Admin":
        history.replace("/auth/admin/dashboard");
        break;
      case "Cliente":
        history.replace("/auth/client/dashboard");
        break;
    }
  }, [user.type]);

  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MainGrid>
        <Navbar />
        <Switch>
          <Route path="/landing" component={Landing} />
          <PrivateRouteAuth path="/auth" component={AuthContainer} user={user} MainProps={props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
