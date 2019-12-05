import React from "react";
import { Link } from "react-router-dom";
import { sessionLogOut } from "../store/actions/session";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import LoginModal from "./LoginModal";

const NavBar = props => {
  const handleLogout = () => {
    props.sessionLogOut();
    props.history.push("/");
  };

  let logoLinkURL = props.user.fullName ? "/auth/dashboard" : "/landing";

  return (
    <div style={navStyles.nav}>
      <label>
        <div>
          <span>
            {props.user.fullName
              ? `Bienvenido ${props.user.fullName}!`
              : `Registrese para comenzar a navegar!`}
          </span>
        </div>
      </label>

      <Link
        to={logoLinkURL}
        style={{ alignSelf: "center", marginLeft: "19rem" }}
      >
        <img
          src="https://via.placeholder.com/75/000000/FFFFFF/?text=DevFlowLogo"
          alt="Logo"
        />
      </Link>

      <span
        style={{
          color: "blue",
          display: "inline-block",
          position: "fixed",
          right: "0"
        }}
      >
        {!props.user.type ? (
          <LoginModal role={"admin"} />
        ) : (
          <span onClick={handleLogout}>Logout</span>
        )}
      </span>
    </div>
  );
};

const navStyles = {
  nav: {
    gridArea: "nav",
    justifySelf: "center",
    width: "100%",
    backgroundColor: "white",
    textAlign: "center",
    display: "flex"
  },
  img: {
    height: "100%"
  }
};

const mapStateToProps = state => ({
  user: state.session.user
});

const mapDispatchToProps = { sessionLogOut };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
