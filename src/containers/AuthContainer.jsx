import React from "react";
import { Route as R, Switch } from "react-router-dom";

import { AuthGrid } from "../templates/AuthGrid";

export default function AuthContainer(props) {
  return (
    <AuthGrid>
      <div style={{ gridArea: "sidebar", background: "purple" }}></div>
      <div style={{ gridArea: "content", background: "yellow" }}></div>

      <Switch>
        <R path="/auth/admin" />
        <R path="/auth/recruiter" />
        <R path="/auth/business" />
      </Switch>
    </AuthGrid>
  );
}
