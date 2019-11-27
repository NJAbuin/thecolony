import React from "react";
import { connect } from "react-redux";

import { CandidateStyle } from "../templates/Candidates";

import { candidateAdd, candidateRemove } from "../store/actions/candidates";

export function Candidate(props) {
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

  return (
    <CandidateStyle>
      {window.location.href.includes("jobpostings") ? (
        <input
          type="checkbox"
          onClick={e => {
            e.target.checked
              ? props.candidateAdd(props.candidate)
              : props.candidateRemove(props.candidate);
          }}
        ></input>
      ) : null}

      <h3>{fullName}</h3>
      <span>{jobTitle}</span>
    </CandidateStyle>
  );
}

const mapDispatchToProps = {
  candidateAdd,
  candidateRemove
};

export default connect(null, mapDispatchToProps)(Candidate);
