import React from "react";
import { connect } from "react-redux";

import { Button } from "../templates/Button";
import { JobPostStyle } from "../templates/JobPostStyle";

import { selectJobPostToState } from "../store/actions/jobPostings";
import { Link, withRouter } from "react-router-dom";

function JobPosting(props) {
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
    client
  } = props.jobPost;

  return (
    <JobPostStyle>
      <div style={{ boxSizing: "border-box", margin: "15px" }}>
        <p>{title}</p>
        <Button onClick={() => props.selectJobPostToState(id)}>
          SELECCIONAR
        </Button>
        <Button
          onClick={() => {
            props.match.url.includes("/auth/admin/jobpostings")
              ? props.history.push(`/auth/admin/jobpostings/${id}`)
              : props.history.push(`/auth/recruiter/jobpostings/${id}`);
          }}
        >
          {" "}
          Ver detalles
        </Button>
      </div>
    </JobPostStyle>
  );
}

const mapDispatchToProps = {
  selectJobPostToState
};

export default withRouter(connect(null, mapDispatchToProps)(JobPosting));
