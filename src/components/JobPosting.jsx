import React from "react";
import { JobPostStyle } from "../templates/JobPostStyle";

export default props => {
  const {
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
      </div>
    </JobPostStyle>
  );
};
