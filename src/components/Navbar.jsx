import React from "react";
import { Link } from "react-router-dom";
import { sessionLogOut } from "../store/actions/session";
import { withRouter } from "react-router";
import { connect } from "react-redux";

const NavBar = props => {
  const handleLogout = () => {
    props.sessionLogOut();
    props.history.push("/");
  };

  let logoLinkURL = props.user.fullName ? "/auth" : "/landing";

  return (
    <div style={navStyles.nav}>
      <Link to={logoLinkURL}>
        <label>
          <div>
            <span>
              {props.user.fullName
                ? `CYCK ${props.user.fullName}`
                : `Stonks go up`}
            </span>
          </div>
        </label>
      </Link>

      <span
        onClick={handleLogout}
        style={{
          color: "blue",
          display: "inline-block",
          position: "fixed",
          right: "0"
        }}
      >
        Logout
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
