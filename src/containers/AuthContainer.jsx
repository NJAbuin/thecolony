import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthGrid } from "../templates/LayoutGrids";
import RecruiterContainer from "./RecruiterContainer";

import Sidebar from "../components/Sidebar";
import AdminContainer from "./AdminContainer";
import NewJobPostingForm from "../components/NewJobPostingForm";

export default ({ user }) => (
  <AuthGrid>
    <Sidebar userType={user.type} />
    <Switch>
      <Route path="/auth/admin" component={AdminContainer} />
      <Route path="/auth/recruiter" component={RecruiterContainer} />
    </Switch>
  </AuthGrid>
);
