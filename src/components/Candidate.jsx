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

  const checker = function() {
    return (
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
    <CandidateStyle>
      {window.location.href.includes("jobpostings") && !checker() ? (
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
      <br />
      <button onClick={e => showCV(e)}>Ver CV</button>
    </CandidateStyle>
  );
}

const mapStateToProps = ({ jobPostingSelected, candidatesSelected }) => ({
  jobPostingSelected,
  candidatesSelected
});

const mapDispatchToProps = {
  candidateAdd,
  candidateRemove
};

export default connect(mapStateToProps, mapDispatchToProps)(Candidate);
