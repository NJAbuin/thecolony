import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { AuthGrid } from "../templates/LayoutGrids";
import Sidebar from "../components/Sidebar";

import RecruiterContainer from "./RecruiterContainer";
import ClientContainer from "./ClientContainer";
import AdminContainer from "./AdminContainer";
import NewJobPostingForm from "../components/NewJobPostingForm";

export default ({ user }) => (
  <AuthGrid>
    <Sidebar userType={user.type} />
    <Switch>
      <Route path="/auth/client" component={ClientContainer} />
      <Route path="/auth/admin" component={AdminContainer} />
      <Route path="/auth/recruiter" component={RecruiterContainer} />
    </Switch>
  </AuthGrid>
);
