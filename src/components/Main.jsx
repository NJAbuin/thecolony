import React from "react";
import LoginModal from "./LoginModal";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import Landing from "./Landing";
import AdminRegisterModal from "./AdminRegisterModal";
import RecrClientRegisterModal from "./RecrClientRegisterModal";
import { loginAdmin } from "../store/actions/userActions";

function Main(props) {
  return (
    <div>
      <LoginModal />
      <AdminRegisterModal />
      <RecrClientRegisterModal />
      <Grid>
        <div style={{ gridArea: "nav", backgroundColor: "blue" }}>NAV</div>
        <Switch>
          <Route path="/landing" component={Landing} />
          <Redirect exact path="/" to="/landing" />
        </Switch>
      </Grid>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: 7.5% 1fr;
  grid-template-columns: 12.5% 1fr;
  grid-template-areas:
    "nav nav"
    "sidebar content";
  height: 100vh;
`;

const mapStateToProps = () => {
  return { user };
};

const mapDispatchToProps = dispatch => ({});

export default connect(null, mapDispatchToProps)(Main);
