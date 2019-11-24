import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import { connect } from "react-redux";
import { MainGrid } from "../templates/MainGrid";
import AuthContainer from "./AuthContainer";
import { ThemeProvider } from "styled-components";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import RecrNewCandidateForm from "../components/RecrNewCandidateForm";

const Main = props => {
  const { user } = props;

  return (
    <ThemeProvider theme={theme}>
      <MainGrid>
        <Navbar user={user} />
        <Switch>
          <Route
            exact
            path="/recruiter/candidate"
            component={RecrNewCandidateForm}
          />

          <Route path="/landing" component={Landing} />
          {/* {'Change route Auth to a Private Route later'} */}
          <Route path="/auth" component={AuthContainer} />
          <Redirect path="/" to="/landing" />
        </Switch>
      </MainGrid>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  user: state.session.user
});

const theme = {
  fontFamily: "PT Sans",
  fontSize: "1rem",
  color: "white"
};

export default connect(mapStateToProps)(Main);
