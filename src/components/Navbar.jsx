import React from "react";

export default props => {
  return (
    <div
      style={{
        gridArea: "nav",
        justifySelf: "center",
        width: "100%",
        backgroundColor: "white",
        textAlign: "center"
      }}
    >
      <img
        src="./images/thecolonynavbar.jpg"
        style={{
          height: "100%"
        }}
      />
    </div>
  );
};
