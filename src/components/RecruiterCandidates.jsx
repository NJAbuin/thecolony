import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Candidate from "./Candidate";

import {
  candidatesApplyToJob,
  candidatesClearListSelection
} from "../store/actions/candidates";
import { CandidateContainer } from "../templates/Candidates";

function RecruiterCandidates(props) {
  return (
    <CandidateContainer>
      <Link to="/auth/recruiter/candidates/new">
        <button>CARGAR CANDIDATO</button>
      </Link>

      {props.candidateList.map(candidate => (
        <Candidate candidate={candidate} key={candidate.id} />
      ))}
    </CandidateContainer>
  );
}
const mapStateToProps = ({ candidateList, jobPostingSelected }) => ({
  candidateList,
  jobPostingSelected
});

export default connect(mapStateToProps)(RecruiterCandidates);
