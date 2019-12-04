import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteJobPosting, getJobPostings } from "../store/actions/jobPostings";

import JobPosting from "../components/JobPosting";

function AdminJobPosting(props) {
  useEffect(() => {
    props.getJobPostings();
  }, []);

  return (
    <div>
      BUSQUEDAS LABORALES
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
