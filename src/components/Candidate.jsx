import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { CandidateStyle } from "../templates/Candidates";

import {
  candidateAdd,
  candidateRemove,
  candidateFetchDetails
} from "../store/actions/candidates";

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

  const checker = function() {
    return (
      props.jobPostingSelected &&
      props.jobPostingSelected.candidates &&
      Boolean(
        props.jobPostingSelected.candidates.find(
          element => element.id == props.candidate.id
        )
      )
    );
  }; // chequea si el candidato ya está incluído en el posting seleccionado y retorna booleano

  const showCV = e => {
    window.open(`${CV.replace("dist", "")}`, "_blank");
  };

  return (
    <CandidateStyle
      backgroundColor={
        checker() && props.match.path.includes("jobpostings")
          ? "#0be325"
          : "#fff"
      }
    >
      <div style={{ height: "100%", overflowY: "auto" }}>
        {props.match &&
        props.match.path.includes("jobpostings") &&
        !checker() ? (
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
        <span>Job Title: {jobTitle}</span>
        <br />
        <span>Age: {age}</span>
        <br />
        <span>Address: {address}</span>
        <br />
        <button onClick={e => showCV(e)}>Ver CV</button>
        <Link to={`/auth/${props.user.type}/candidates/${id}`}>
          <button
            onClick={e => {
              console.log(id);
              console.log(props.candidateFetchDetails);
              props.candidateFetchDetails(id);
            }}
          >
            Ver detalles
          </button>
        </Link>
      </div>
    </CandidateStyle>
  );
}

const mapStateToProps = ({
  jobPostingSelected,
  candidatesSelected,
  session
}) => ({
  jobPostingSelected,
  candidatesSelected,
  user: session.user
});

const mapDispatchToProps = {
  candidateAdd,
  candidateRemove,
  candidateFetchDetails
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Candidate)
);
