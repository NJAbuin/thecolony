import React from "react";

import { LandingGrid } from "../templates/LandingGrid";

export default function Landing(props) {
  return (
    <LandingGrid>
      <div style={{ gridArea: "log1", background: "red" }}></div>
      <div style={{ gridArea: "log2", background: "purple" }}></div>
      <div style={{ gridArea: "log3", background: "aquamarine" }}></div>
    </LandingGrid>
  );
}
