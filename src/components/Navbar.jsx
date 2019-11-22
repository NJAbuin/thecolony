import React from "react";

export default props => {
  const { user } = props;
  return (
    <div style={navStyles.nav}>
      <img src="./images/thecolonynavbar.jpg" style={navStyles.img} />
      <span>{user.fullName ? "CYCK" : "Stonks go up"}</span>
    </div>
  );
};

const navStyles = {
  nav: {
    gridArea: "nav",
    justifySelf: "center",
    width: "100%",
    backgroundColor: "white",
    textAlign: "center"
  },
  img: {
    height: "100%"
  }
};
