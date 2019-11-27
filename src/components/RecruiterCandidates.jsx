import React, { useEffect } from "react";
import { connect } from "react-redux";

import Candidate from "./Candidate";

import { candidatesApplyToJob, candidatesClearListSelection } from '../store/actions/candidates'
import { CandidateContainer } from "../templates/Candidates";

function RecruiterCandidates(props) {
  return (
    <CandidateContainer>
      {props.candidateList.map(candidate => (
        <Candidate candidate={candidate} />
      ))}
    </CandidateContainer>
  );
}
const mapStateToProps = ({ candidateList }) => ({
  candidateList
});

export default connect(mapStateToProps)(RecruiterCandidates);
