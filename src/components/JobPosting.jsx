import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { JobPostStyle } from "../templates/JobPostStyle";
import { Candidate } from "../components/Candidate";

import { selectJobPostToState } from "../store/actions/jobPostings";

function JobPosting(props) {
  const userType = props.session.user.type;
  const {
    id,
    title,
    description,
    salary,
    workload,
    startingDate,
    imgURL,
    benefits,
    openings,
    client,
    candidates
  } = props.jobPost;

  let [showCands, setShowCands] = useState(false);

  return (
    <JobPostStyle>
      <div style={{ boxSizing: "border-box", margin: "15px", heigth: "100%" }}>
        <p>{title}</p>
        {userType !== "recruiter" ? (
          <button onClick={() => setShowCands(!showCands)}>
            {showCands ? "OCULTAR CANDIDATOS" : "VER CANDIDATOS"}
          </button>
        ) : (
          <button onClick={() => props.selectJobPostToState(id)}>
            SELECCIONAR
          </button>
        )}
        <Link to={`/auth/${userType}/jobpostings/${id}`}>
          <button>Ver detalles</button>
        </Link>
        {showCands
          ? candidates.map(candidate => (
              <Candidate candidate={candidate} key={candidate.id} />
            ))
          : null}
      </div>
    </JobPostStyle>
  );
}

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = {
  selectJobPostToState
};

export default connect(mapStateToProps, mapDispatchToProps)(JobPosting);
