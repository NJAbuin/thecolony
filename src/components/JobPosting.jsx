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
        {props.match.path.includes("recruiter") ? (
          <Button onClick={() => props.selectJobPostToState(id)}>
            SELECCIONAR
          </Button>
        ) : null}
        <Button
          onClick={() => {
            props.match.url.includes("/auth/admin/jobposting")
              ? props.history.push(`/auth/admin/jobposting/${id}`)
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
