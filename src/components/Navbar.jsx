import React from "react";
import { Link } from "react-router-dom";
import { sessionLogOut } from "../store/actions/session";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import LoginModal from "./LoginModal";

const NavBar = props => {
  const handleLogout = () => (props.sessionLogOut(), props.history.push("/"));

  let logoLinkURL = props.user.type ? `/auth/${props.user.type}` : "/landing";

  return (
    <div style={navStyles.nav}>
      <label>
        <div>
          <span>
            {props.user.fullName
              ? `Bienvenido ${props.user.fullName.split(" ")[0]}!`
              : `Registrese para comenzar a navegar!`}
          </span>
        </div>
      </label>

      <Link
        to={logoLinkURL}
        style={{
          alignSelf: "center",
          marginLeft: "19rem",
          textAlign: "center"
        }}
      >
        <p style={{ backgroundColor: "black", color: "white" }}>DEVFLOWLOGO</p>
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
            <button onClick={handleLogout}>Logout</button>
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
    display: "flex",
    borderBottom: "solid 2px rgb(102, 153, 196)"
  },
  img: {
    height: "100%"
  }
};

const mapStateToProps = state => ({
  user: state.session.user
});

const mapDispatchToProps = { sessionLogOut };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));
