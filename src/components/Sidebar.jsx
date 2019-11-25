import React from "react";
import { Link } from "react-router-dom";

export default props => {
  const sidebarOptions = {
    Dashboard: "/auth/recruiter",
    Busquedas: "/auth/recruiter/jobpostings",
    Candidatos: "/auth/recruiter/candidates"
  };

  const POWERS = Object.keys(sidebarOptions);
  const LINKS = Object.values(sidebarOptions);

  return (
    <div style={{ backgroundColor: "cyan", gridArea: "sidebar" }}>
      <ul>
        {POWERS.map((power, val) => (
          <Link to={LINKS[val]}>
            <label>
              <li>{power}</li>
            </label>
          </Link>
        ))}
      </ul>
    </div>
  );
};
