import React from "react";
import { Link } from "react-router-dom";

import { SidebarButton } from "../templates/SidebarButton";

export default props => {
  const recruiterSidebar = {
    Dashboard: "/auth/recruiter",
    Busquedas: "/auth/recruiter/jobpostings",
    Candidatos: "/auth/recruiter/candidates"
  };

  const POWERS = Object.keys(recruiterSidebar);
  const LINKS = Object.values(recruiterSidebar);

  return (
    <div style={{ backgroundColor: "cyan", gridArea: "sidebar" }}>
      {POWERS.map((power, val) => (
        <Link to={LINKS[val]}>
          <label>
            <SidebarButton>{power}</SidebarButton>
          </label>
        </Link>
      ))}
    </div>
  );
};
