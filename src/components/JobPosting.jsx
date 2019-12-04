import React from "react";
import { connect } from "react-redux";

import { Button } from "../templates/Button";
import { JobPostStyle } from "../templates/JobPostStyle";

import { selectJobPostToState } from "../store/actions/jobPostings";


function JobPosting(props) {
  const userType = props.session.user.type
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
        {userType === "recruiter" ? (
          <Button onClick={() => props.selectJobPostToState(id)}>
            SELECCIONAR
          </Button>
        ) : null}
        <Button
          onClick={() => {
            userType === 'admin'
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

const mapStateToProps = ({ session }) => ({
  session
})
const mapDispatchToProps = {
  selectJobPostToState
};

export default connect(mapStateToProps, mapDispatchToProps)(JobPosting)
