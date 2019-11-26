import React from "react";
import { connect } from 'react-redux'

import { JobPostStyle } from "../templates/JobPostStyle";

import { selectJobPostToState } from '../store/actions/jobPostings'

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
    <JobPostStyle onClick={() => props.selectJobPostToState(id)}>
      <div style={{ boxSizing: "border-box", margin: "15px" }}>
        <p>{title}</p>
      </div>
    </JobPostStyle>
  );
};

const mapDispatchToProps = {
  selectJobPostToState
}

export default connect(null, mapDispatchToProps)(JobPosting)