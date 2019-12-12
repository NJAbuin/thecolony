import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { CandidateStyle } from "../templates/Candidates";
import { Button } from "../templates/Button";

import {
  candidateAdd,
  candidateRemove,
  candidateFetchDetails
} from "../store/actions/candidates";
import { H5 } from "../templates/Text";

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
          ? "63, 191, 63"
          : null
      }
    >
      <div
        style={{
          boxSizing: "border-box",
          margin: "5px 0 7px 5px",
          height: "100%"
        }}
      >
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

        <H5>{fullName}</H5>
        <span>Job Title- {jobTitle}</span>
        <br />
        <span>Age- {age}</span>
        <br />
        <span>Salario esperado- ${expectedSalary}</span>
        <br />
        {CV ? <button onClick={e => showCV(e)}>Ver CV</button> : null}

        <Link to={`/auth/${props.user.type}/candidates/${id}`}>
          <Button onClick={e => props.candidateFetchDetails(id)}>
            Ver detalles
          </Button>
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
