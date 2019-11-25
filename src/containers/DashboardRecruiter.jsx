import React, { useState } from "react";

import JobPosting from "../components/JobPosting";
import { Dashboard, DashboardR, DashboardL } from "../templates/Dashboard";

function DashboardRecruiter(props) {
  return (
    <Dashboard>
      <DashboardL>
        <div style={{ gridArea: "titlebarL" }}>JOBPOSTINGS</div>
        <div style={{ gridArea: "contentL", backgroundColor: "blue" }}>
          <ul>
            {jPostings.map((x, y) => (
              <li key={y}>{`${x} ${y * Math.random() * 6}`}</li>
            ))}
          </ul>
          <JobPosting />
        </div>
      </DashboardL>

      <DashboardR>
        <div style={{ gridArea: "titlebarR" }}></div>
        <div style={{ gridArea: "contentR", backgroundColor: "green" }}></div>
      </DashboardR>
    </Dashboard>
  );
}

const jPostings = [
  "jobposting a",
  "jobposting b",
  "jobposting c",
  "jobposting d",
  "jobposting e"
];

export default DashboardRecruiter;
