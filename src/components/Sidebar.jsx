import React from "react";
import { Link } from "react-router-dom";

import { SidebarButton, SidebarStyle } from "../templates/SidebarStyles";
import { mapSidebar } from "../../utils/sidebarRoutes";

export default props => {
  const [POWERS, URLs] = mapSidebar(props.user);

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
