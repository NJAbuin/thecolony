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
import RecrNewCandidateForm from "../components/RecrNewCandidateForm";

//styles
import { MainGrid } from "../templates/MainGrid";

//actions
import { fetchSession } from "../store/actions/session";

function Main(props) {
  const { user, fetchSession, history } = props;
  /*
  useEffect(() => fetchSession(), []);

  /*
  if (props.user.type)
    useEffect(() => history.push(`/auth/${user.type}`), [user]);
*/

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
}

const mapStateToProps = state => ({
  user: state.session.user
});

const mapDispatchToProps = { fetchSession };

const theme = {
  fontFamily: "PT Sans",
  fontSize: "1rem",
  color: "white"
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
