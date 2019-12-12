import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { JobPostStyle } from "../templates/JobPostStyle";
import { Button } from "../templates/Button";

import { Candidate } from "../components/Candidate";

import { selectJobPostToState } from "../store/actions/jobPostings";
import { candidateFetchDetails } from "../store/actions/candidates";

function JobPosting(props) {
  const user = props.session.user;
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
        {user.type !== "recruiter" ? (
          <Button onClick={() => setShowCands(!showCands)}>
            {showCands ? "OCULTAR CANDIDATOS" : "VER CANDIDATOS"}
          </Button>
        ) : (
          <Button onClick={() => props.selectJobPostToState(id)}>
            SELECCIONAR
          </Button>
        )}
        <Link to={`/auth/${user.type}/jobpostings/${id}`}>
          <Button>Ver detalles</Button>
        </Link>

        <div>
          {showCands
            ? candidates.map(candidate => (
                <Candidate
                  candidate={candidate}
                  key={candidate.id}
                  user={user}
                  candidateFetchDetails={props.candidateFetchDetails}
                />
              ))
            : null}
        </div>
      </div>
    </JobPostStyle>
  );
}

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = {
  selectJobPostToState,
  candidateFetchDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(JobPosting);
