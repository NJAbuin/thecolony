//node modules
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//components / containers
import AuthContainer from "./AuthContainer";

import PrivateRoute from "../components/PrivateRoute";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";

//styles
import { MainGrid } from "../templates/LayoutGrids";
import { MainTheme } from "../templates/MainTheme";

//actions
import { fetchSession } from "../store/actions/session";

function Main({ user, fetchSession, history }) {
  const [loading, setLoading] = useState(true)
  const { pathname } = useLocation()

  useEffect(() => {
    fetchSession().then(() => setLoading(false))
    if (!loading && user.type !== pathname.split('/')[1])
      history.replace(`/auth/${user.type}/`)
  }, [user.type]);

  return (
    <ThemeProvider theme={MainTheme}>
      <MainGrid>
        <Navbar />
        <Switch>
          <Route path="/landing" component={Landing} />
          <PrivateRoute path="/auth" component={AuthContainer} user={user} loading={loading} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
