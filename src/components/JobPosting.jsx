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
    client,
    id
  } = props.jobPost;

  return (
    <JobPostStyle>
      <Link className="thumbnail" to={`/auth/recruiter/jobpostings/${id}`}>
        <div style={{ boxSizing: "border-box", margin: "15px" }}>
          <p>{title}</p>
        </div>

      </Link>

    </JobPostStyle>
  );
};
