import React from "react";

import { LandingGrid } from "../templates/LandingGrid";

export default props => {
  const IS = { width: "auto", height: "auto", maxWidth: "33vw" };

  return (
    <LandingGrid>
      <div style={{ gridArea: "log1", background: "red" }}>
        <img src="./images/business.jpg" style={IS} />
      </div>

      <div style={{ gridArea: "log2", background: "purple" }}>
        <img src="./images/recruiter.png" style={IS} />
      </div>

      <div style={{ gridArea: "log3", background: "aquamarine" }}>
        <img src="./images/bee.jpg" style={IS} />
      </div>
    </LandingGrid>
  );
};
