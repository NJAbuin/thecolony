import React from "react";
import { Link } from "react-router-dom";

import { SidebarButton, SidebarStyle } from "../templates/SidebarStyles";
import { mapSidebar } from "../../utils/sidebarRoutes";

export default ({ userType }) => {
  const [POWERS, URLs] = mapSidebar(userType);

  return (
    <SidebarStyle>
      {POWERS.map((power, val) => (
        <Link key={`${power}`} to={URLs[val]}>
          <label>
            <SidebarButton>{power}</SidebarButton>
          </label>
        </Link>
      ))}
    </SidebarStyle>
  );
};
