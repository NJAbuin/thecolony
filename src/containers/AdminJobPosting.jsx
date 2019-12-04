import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteJobPosting, getJobPostings } from "../store/actions/jobPostings";
import { H1 } from "../templates/Text";

import JobPosting from "../components/JobPosting";

function AdminJobPosting(props) {
  useEffect(() => {
    props.getJobPostings();
  }, []);

  return (
    <div>
      <H1>BUSQUEDAS LABORALES</H1>
      <button
        onClick={e => {
          props.history.push("/auth/admin/jobpostings/new");
        }}
      >
        Crear Busqueda
      </button>
      <hr />
      {props.jobPostings.map(jobPost => (
        <JobPosting jobPost={jobPost} key={jobPost.id} />
      ))}
    </div>
  );
}

const mapStateToProps = ({ jobPostings }) => ({
  jobPostings
});

const mapDispatchToProps = {
  deleteJobPosting,
  getJobPostings
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminJobPosting);
