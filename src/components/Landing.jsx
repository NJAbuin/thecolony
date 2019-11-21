import React from "react";

import { LandingGrid } from "../templates/LandingGrid";
import { Card } from "../templates/Card";

export default props => {
  return (
    <LandingGrid>
      <Card color="cyan"></Card>
      <Card color="yellow"></Card>
      <Card color="grey"></Card>
    </LandingGrid>
  );
};
