import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import JobPosting from "../components/JobPosting";
import Candidate from "../components/Candidate";
import {
  Dashboard,
  Left,
  Right,
  TitleL,
  TitleR,
  ContentL,
  ContentR
} from "../templates/Dashboard";

import {
  candidatesApplyToJob,
  candidatesClearListSelection
} from "../store/actions/candidates";

function RecruiterJobPostings(props) {
  const clearAll = () => {
    document
      .querySelectorAll("input")
      .forEach(input => (input.checked = false));
    candidatesClearListSelection();
  };

  return (
    <Dashboard>
      <Left>
        <TitleL>
          <span style={{ display: "inline-block", padding: "25px" }}>
            BUSQUEDAS LABORALES
          </span>
        </TitleL>
        <ContentL>
          {props.jobPostings.map(jobPost =>
            <JobPosting key={jobPost.id} jobPost={jobPost} />
          )}
        </ContentL>
      </Left>

      <Right>
        <TitleR>
          CANDIDATES
          <br />
          <div>
            <button
              onClick={() =>
                props.candidatesApplyToJob(
                  props.jobPostingSelected,
                  props.candidatesSelected
                )
              }
            >
              ASIGNAR A BUSQUEDA SELECCIONADA
            </button>
            <button onClick={() => clearAll()}>CANCELAR SELECCION</button>
          </div>
        </TitleR>
        <ContentR>
          {props.candidateList.map(candidate => (
            <Candidate candidate={candidate} key={candidate.id} />
          ))}
        </ContentR>
      </Right>
    </Dashboard>
  );
}

const mapDispatchToProps = {
  candidatesApplyToJob,
  candidatesClearListSelection
};

const mapStateToProps = ({
  candidateList,
  jobPostings,
  jobPostingSelected,
  candidatesSelected
}) => ({
  candidateList,
  jobPostings,
  jobPostingSelected,
  candidatesSelected
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecruiterJobPostings);
