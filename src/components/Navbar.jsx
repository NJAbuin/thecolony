import React from "react";
import { Link } from "react-router-dom";
import { sessionLogOut } from "../store/actions/session";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import LoginModal from "./LoginModal";

import { Button } from "../templates/Button";

const NavBar = props => {
  const handleLogout = () => (props.sessionLogOut(), props.history.push("/"));

  let logoLinkURL = props.user.type ? `/auth/${props.user.type}` : "/landing";

  return (
    <div style={navStyles.nav}>
      <label>
        <div>
          <span style={{ marginLeft: "0.5rem" }}>
            {props.user.fullName
              ? `Bienvenido ${props.user.fullName.split(" ")[0]}!`
              : `Registrese para comenzar a navegar!`}
          </span>
        </div>
      </label>

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
          <Button onClick={handleLogout}>Logout</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
