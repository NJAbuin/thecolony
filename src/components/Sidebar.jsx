import React from "react";
import { Link } from "react-router-dom";

import { SidebarButton, SidebarStyle } from "../templates/SidebarStyles";

export default props => {
  //const {POWERS, URLs} = props.user.XXXX
  const recruiterSidebar = {
    Dashboard: "/auth/recruiter/dashboard",
    Busquedas: "/auth/recruiter/jobpostings",
    Candidatos: "/auth/recruiter/candidates"
  };

  const POWERS = Object.keys(recruiterSidebar);
  const URLs = Object.values(recruiterSidebar);

  return (
    <SidebarStyle>
      {POWERS.map((power, val) => (
        <Link to={URLs[val]}>
          <label>
            <SidebarButton key={`${power}`}>{power}</SidebarButton>
          </label>
        </Link>
      ))}
    </SidebarStyle>
  );
};
