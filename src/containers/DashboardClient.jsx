import React from "react";
import { Dashboard, DashboardL, DashboardR } from "../templates/Dashboard";

function DashboardClient(props) {
  return (
    <Dashboard>
      <DashboardL>
        <div style={{ gridArea: "titlebarL" }}></div>
        <div style={{ gridArea: "contentL" }}></div>
      </DashboardL>

      <DashboardR>
        <div style={{ gridArea: "titlebarR" }}></div>
        <div style={{ gridArea: "contentR" }}></div>
      </DashboardR>
    </Dashboard>
  );
}

export default DashboardClient;
