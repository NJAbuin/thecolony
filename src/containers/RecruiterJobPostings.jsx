import React, { useState } from "react";
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

function RecruiterJobPostings(props) {
  return (
    <Dashboard>
      <Left>
        <TitleL>
          <span style={{ display: "inline-block", padding: "25px" }}>
            BUSQUEDAS LABORALES
          </span>
        </TitleL>
        <ContentL>
          {props.jobPostings.map(jobPost => (
            <JobPosting jobPost={jobPost} key={jobPost.id} />
          ))}
        </ContentL>
      </Left>

      <Right>
        <TitleR>
          CANDIDATES
          <br />
          <div>
            <button>ASIGNAR A BUSQUEDA SELECCIONADA</button>
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

const mapStateToProps = ({ candidateList, jobPostings }) => ({
  candidateList,
  jobPostings
});

export default connect(mapStateToProps)(RecruiterJobPostings);
