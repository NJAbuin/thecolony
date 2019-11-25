import React from "react";
import { JobPosting } from "../templates/JobPosting";

export default props => {
  //props.jobPostings = exJobPost;
  const exJobPost = {
    title: "Cajero Elefante",
    description: "Hace cambio",
    salary: 100,
    workload: 9,
    startingDate: new Date().toString(),
    imgURL: "",
    benefits: "es rico",
    openings: 3,
    client: "Jumbo"
  };

  let jobKeys = Object.keys(exJobPost);
  let jobValues = Object.values(exJobPost);
  console.log(jobValues, jobKeys);
  return (
    <JobPosting>
      <ul>
        {jobKeys.map((key, val) => (
          <li key={key}>
            {key} {jobValues[val]}
          </li>
        ))}
      </ul>
    </JobPosting>
  );
};
