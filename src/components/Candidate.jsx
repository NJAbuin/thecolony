import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import { CandidateStyle } from "../templates/Candidates";

function Candidate(props) {
  const {
    id,
    DNI,
    fullName,
    age,
    jobTitle,
    CV,
    address,
    expectedSalary
  } = props.candidate;
  /*
  useEffect(() => {
    const check = props.assigned && props.assigned.includes(fullName);
    console.log(check);
  }, [props.assigned]);
*/

  return (
    <CandidateStyle>
      {props.match.path.includes("jobpostings") ? (
        <input candId={id} type="checkbox"></input>
      ) : (
        ""
      )}
      <h3>{fullName}</h3>
      <span>{jobTitle}</span>
    </CandidateStyle>
  );
}

export default withRouter(Candidate);
