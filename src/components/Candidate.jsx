import React from "react";
import { connect } from 'react-redux'

import { CandidateStyle } from "../templates/Candidates";

import { candidateAdd, candidateRemove } from '../store/actions/candidates'

export function Candidate(props) {
  const {
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
      <input
        type="checkbox"
        onClick={e => {
          e.target.checked
            ? props.candidateAdd(props.candidate)
            : props.candidateRemove(props.candidate)
        }}
      ></input>
      <h3>{fullName}</h3>
      <span>{jobTitle}</span>
    </CandidateStyle>
  );
};

const mapDispatchToProps = {
  candidateAdd,
  candidateRemove
}

export default connect(null, mapDispatchToProps)(Candidate)