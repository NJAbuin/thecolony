import React, { Fragment } from "react";
import { Route as R, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import { connect } from "react-redux";
import { MainGrid } from "../templates/MainGrid";
import AuthContainer from "./AuthContainer";

import Landing from "../components/Landing";
import Navbar from "../components/Navbar";

const Main = props => {
  const { user } = props;

  return (
    <MainGrid>
      <Navbar user={user} />
      <Switch>
        <R path="/landing" component={Landing} />
        {/* {'Change route Auth to a Private Route later'} */}
        <R path="/auth" component={AuthContainer} />

        <Redirect exact path="/" to="/landing" />
      </Switch>
    </MainGrid>
  );
};

/* FIXME: Que es esto Manu? Estaba metido como texto entre los links;
const Grid = styled.div` display: grid; grid-template-rows: 7.5% 1fr;
grid-template-columns: 12.5% 1fr; grid-template-areas: "nav nav"
"sidebar content"; height: 100vh; `;
*/

const mapStateToProps = state => ({
  user: state.session.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  null
)(Main);
