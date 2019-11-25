import React from "react";
import { Dashboard, Left, Right } from "../templates/Dashboard";

function DashboardClient(props) {
  return (
    <Dashboard>
      <Left>
        <div style={{ gridArea: "titlebarL" }}></div>
        <div style={{ gridArea: "contentL" }}></div>
      </Left>

      <Right>
        <div style={{ gridArea: "titlebarR" }}></div>
        <div style={{ gridArea: "contentR" }}></div>
      </Right>
    </Dashboard>
  );
}

export default DashboardClient;
