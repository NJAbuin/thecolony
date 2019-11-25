import React from "react";
import { Link } from "react-router-dom";

import { SidebarButton, SidebarStyle } from "../templates/SidebarStyles";

export default props => {
  const recruiterSidebar = {
    Dashboard: "/auth/recruiter",
    Busquedas: "/auth/recruiter/jobpostings",
    Candidatos: "/auth/recruiter/candidates"
  };

  const POWERS = Object.keys(recruiterSidebar);
  const LINKS = Object.values(recruiterSidebar);

  return (
    <div style={{ backgroundColor: "purple", gridArea: "sidebar" }}>
      {POWERS.map((power, val) => (
        <Link to={LINKS[val]}>
          <label>
            <SidebarButton key={`${power}`}>{power}</SidebarButton>
          </label>
        </Link>
      ))}
    </div>
  );
};
