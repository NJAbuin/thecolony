import React, { useEffect } from "react";
import { getJobPostings } from "../store/actions/jobPostings";
import { connect } from "react-redux";
import { FullDash } from "../templates/Dashboard";
import JobPosting from "../components/JobPosting";

function ClientJobPostings(props) {
  useEffect(() => {
    props.getJobPostings();
  }, []);

  return (
    <FullDash>
      <button onClick={e => props.history.push("/auth/client/jobpostings/new")}>
        Crear Busqueda
      </button>
      {props.jobPostings.map(jobPosting => (
        <JobPosting key={jobPosting.id} jobPost={jobPosting} />
      ))}
    </FullDash>
  );
}

const mapStateToProps = ({ jobPostings }) => ({
  jobPostings
});

const mapDispatchToProps = {
  getJobPostings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientJobPostings);
