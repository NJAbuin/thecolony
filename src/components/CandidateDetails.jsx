import React from "react";
import { connect } from "react-redux";

import { CandidatePosting } from "../components/CandidatePosting";

import { CandidateStyle } from "../templates/Candidates";
import { H5 } from '../templates/Text'
import { candidateFetchDetails } from "../store/actions/candidates";

export function CandidateDetails({ candidateDetails, session }) {
  const {
    id,
    DNI,
    fullName,
    age,
    jobTitle,
    CV,
    address,
    expectedSalary,
    jobpostings
  } = candidateDetails;

  const showCV = () => window.open(`${CV.replace("dist", "")}`, "_blank");

  return Object.keys(candidateDetails).length == 0 ? (
    "No details found"
  ) : (
      <CandidateStyle>
        <H5>{fullName}</H5>
        <span>{jobTitle}</span>
        <br />
        <button onClick={e => showCV(e)}>Ver CV</button>

        {jobpostings.length > 0
          ? jobpostings.map(posting => (
            <CandidatePosting
              posting={posting}
              key={posting.id}
              candidate={candidateDetails}
              user={session.user}
            />
          ))
          : null}

        <br />
      </CandidateStyle>
    );
}

const mapStateToProps = ({ candidateDetails, session }) => ({
  candidateDetails,
  session
});

const mapDispatchToProps = {
  candidateFetchDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateDetails);
