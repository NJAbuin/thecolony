import React from "react";
import { connect } from "react-redux";

import { CandidateStyle } from "../templates/Candidates";
import { candidateFetchDetails } from "../store/actions/candidates";

export function CandidateDetails({ candidateDetails }) {
  const {
    id,
    DNI,
    fullName,
    age,
    jobTitle,
    CV,
    address,
    expectedSalary
  } = candidateDetails;

  const showCV = () => window.open(`${CV.replace("dist", "")}`, "_blank");

  return Object.keys(candidateDetails).length == 0 ? (
    "No details found"
  ) : (
    <CandidateStyle>
      <h3>{fullName}</h3>
      <span>{jobTitle}</span>
      <br />
      <button onClick={e => showCV(e)}>Ver CV</button>
    </CandidateStyle>
  );
}

const mapStateToProps = ({ candidateDetails }) => ({
  candidateDetails
});

const mapDispatchToProps = {
  candidateFetchDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateDetails);