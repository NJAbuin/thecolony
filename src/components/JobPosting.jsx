import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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

  let detailsRoute;

  switch (userType) {
    case 'admin':
      detailsRoute = `/auth/admin/jobpostingss/${id}`
    case 'recruiter':
      detailsRoute = `/auth/admin/recruiter/${id}`
    case 'client':
      detailsRoute = `/auth/admin/client/${id}`
  }

  return (
    <JobPostStyle>
      <div style={{ boxSizing: "border-box", margin: "15px" }}>
        <p>{title}</p>
        {userType !== 'recruiter' ?
          <Button onClick={() => console.log('Haceme el dropdown')}>
            VER CANDIDATOS
          </Button>
          : <Button onClick={() => props.selectJobPostToState(id)}>
            SELECCIONAR
          </Button>}
        <Link to={detailsRoute}>
          <Button>Ver detalles</Button>
        </Link>
      </div>
    </JobPostStyle >
  );
}

const mapStateToProps = ({ session }) => ({
  session
})

const mapDispatchToProps = {
  selectJobPostToState
};

export default connect(mapStateToProps, mapDispatchToProps)(JobPosting)
