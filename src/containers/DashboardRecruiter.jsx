import React, { useState } from "react";

import { Dashboard } from "../templates/Dashboard";
import { DashboardR } from "../templates/DashboardR";
import { DashboardL } from "../templates/DashboardL";

function DashboardRecruiter(props) {
  //  const {jPostings, candidates} = props
  /*
  const [candidates, setCandidatesToSubmit] = useState([]);
    setCandidatesToSubmit([
    ...candidates,
    {
      id: candidates.length,
      value: "john asshole"
    }
  ]);

  hacer assignment de candidates 100% back
  o
  hacer assignment de candidates form>checkbox, on submit, axios
*/
  return (
    <Dashboard>
      <DashboardL>
        <div style={{ gridArea: "titlebarL" }}>JOBPOSTINGS</div>
        <div style={{ gridArea: "contentL", backgroundColor: "blue" }}>
          <ul>
            {jPostings.map((x, y) => (
              <li>{`${x} ${y * Math.random() * 6}`}</li>
            ))}
          </ul>
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
