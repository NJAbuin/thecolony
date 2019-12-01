import React from "react";
import { Link } from "react-router-dom";

import { SidebarButton, SidebarStyle } from "../templates/SidebarStyles";
import {
  adminSidebar,
  recruiterSidebar,
  clientSidebar,
  mapSidebar
} from "../../utils/sidebarRoutes";

export default props => {
  let POWERS, URLs;

  switch (props.type) {
    case "Admin":
      [POWERS, URLs] = mapSidebar(adminSidebar);
      break;

    case "Recruiter":
      [POWERS, URLs] = mapSidebar(recruiterSidebar);
      break;

    case "Client":
      [POWERS, URLs] = mapSidebar(clientSidebar);
      break;
  }

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
