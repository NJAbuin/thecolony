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
  const [search, setSearch] = useState("");
  const [candidateList, setCandidateList] = useState(props.candidateList);
  const clearAll = () => {
    document
      .querySelectorAll("input")
      .forEach(input => (input.checked = false));
    candidatesClearListSelection();
  };

  useEffect(() => {
    return setCandidateList(props.candidateList);
  }, []);

  useEffect(() => {
    if (search === "") return setCandidateList(props.candidateList);

    return setCandidateList(
      candidateList.filter(
        candidate =>
          candidate.fullName.includes(search) ||
          candidate.jobTitle.includes(search)
      )
    );
  }, [search]);

  const handleSearch = e => {
    let filteredList = props.candidateList.filter(
      candidate =>
        candidate.fullName
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        candidate.jobTitle.toLowerCase().includes(e.target.value.toLowerCase())
    );
    return setCandidateList(filteredList);
  };
  return (
    <Dashboard>
      <Left>
        <TitleL>
          <span style={{ display: "inline-block", padding: "25px" }}>
            BUSQUEDAS LABORALES
          </span>
          <h4>
            Busqueda seleccionada: <br /> {props.jobPostingSelected.title}
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
              onClick={() =>
                props.candidatesApplyToJob(
                  props.jobPostingSelected,
                  props.candidatesSelected
                )
              }
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
          {search === ""
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
