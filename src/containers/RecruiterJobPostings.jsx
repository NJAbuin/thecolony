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

import { selectJobPostToState } from "../store/actions/jobPostings";

function RecruiterJobPostings(props) {
  const [search, setSearch] = useState(null);
  const [updated, setUpdater] = useState(true);

  const [candidateList, setCandidateList] = useState(props.candidateList);

  const clearAll = () => {
    document
      .querySelectorAll("input")
      .forEach(input => (input.checked = false));
    candidatesClearListSelection();
  };

  useEffect(() => {
    if (localStorage.jobPostingSelectedId) {
      props.selectJobPostToState(localStorage.getItem("jobPostingSelectedId"));
    }
  }, []);

  useEffect(() => {
    if (search) {
      return setCandidateList(
        props.candidateList.filter(
          candidate =>
            candidate.fullName.toLowerCase().includes(search) ||
            candidate.jobTitle.toLowerCase().includes(search)
        )
      );
    }
    return setCandidateList(props.candidateList);
  }, [search]);

  const handleSearch = e => {
    return setSearch(e.target.value.toLowerCase());
  };

  return (
    <Dashboard>
      <Left>
        <TitleL>
          <span style={{ display: "inline-block", padding: "5px" }}>
            BUSQUEDAS LABORALES
          </span>
          <h4 style={{ padding: "5px" }}>
            Busqueda seleccionada: {props.jobPostingSelected.title}
          </h4>
        </TitleL>

        <ContentL>
          {props.jobPostings.map(jobPost => (
            <JobPosting key={jobPost.id} jobPost={jobPost} />
          ))}
        </ContentL>
      </Left>

      <Right>
        <TitleR>
          CANDIDATES
          <br />
          <div>
            <button
              onClick={() => {
                props.candidatesApplyToJob(
                  props.jobPostingSelected,
                  props.candidatesSelected
                );
                localStorage.setItem(
                  "jobPostingSelectedId",
                  props.jobPostingSelected.id
                );
                clearAll();
                alert("Candidatos asignados con exito!");
                location.reload();
              }}
            >
              ASIGNAR A BUSQUEDA SELECCIONADA
            </button>
            <button onClick={() => clearAll()}>CANCELAR SELECCION</button>{" "}
            <br />
            <input
              type="text"
              placeholder="Search.."
              onChange={e => handleSearch(e)}
            />
          </div>
        </TitleR>
        <ContentR>
          {!search
            ? props.candidateList.map(candidate => (
                <Candidate candidate={candidate} key={candidate.id} />
              ))
            : candidateList.map(candidate => (
                <Candidate candidate={candidate} key={candidate.id} />
              ))}
        </ContentR>
      </Right>
    </Dashboard>
  );
}

const mapDispatchToProps = {
  candidatesApplyToJob,
  candidatesClearListSelection,
  selectJobPostToState
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
