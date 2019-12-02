import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Candidate from "./Candidate";

import {
  candidatesApplyToJob,
  candidatesClearListSelection
} from "../store/actions/candidates";
import { FullDash } from "../templates/Dashboard";

function RecruiterCandidates(props) {
  return (
    <FullDash>
      <Link to="/auth/recruiter/candidates/new">
        <button>CARGAR CANDIDATO</button>
      </Link>

      {props.candidateList.map(candidate => (
        <Candidate candidate={candidate} key={candidate.id} />
      ))}
    </FullDash>
  );
}
const mapStateToProps = ({ candidateList, jobPostingSelected }) => ({
  candidateList,
  jobPostingSelected
});

export default connect(mapStateToProps)(RecruiterCandidates);
