import React from "react";
import { Dashboard, Left, Right } from "../templates/Dashboard";

function DashboardRecruiter(props) {
  return (
    <Dashboard>
      <Left>
        <div style={{ gridArea: "titlebarL" }}>DASHBOARD CONTENT LEFT</div>
        <div style={{ gridArea: "contentL" }}>
          STATISTICS & GRAPHS??? GO HERE, Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Necessitatibus tempora veniam odio ea
          quae quasi, neque tenetur dolorum ad nihil soluta debitis unde
          dignissimos modi voluptates iure delectus, sed placeat?
        </div>
      </Left>

      <Right>
        <div style={{ gridArea: "titlebarR" }}>DASHBOARD CONTENT RIGHT</div>
        <div style={{ gridArea: "contentR" }}>
          STATISTICS & GRAPHS??? GO HERE, Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Necessitatibus tempora veniam odio ea
          quae quasi, neque tenetur dolorum ad nihil soluta debitis unde
          dignissimos modi voluptates iure delectus, sed placeat?
        </div>
      </Right>
    </Dashboard>
  );
}

export default DashboardRecruiter;
