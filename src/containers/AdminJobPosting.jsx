import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteJobPosting, getJobPostings } from "../store/actions/jobPostings";
import { H1 } from "../templates/Text";

import JobPosting from "../components/JobPosting";

function AdminJobPosting(props) {
  const [jobList, setJobList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.getJobPostings();
    return setJobList(props.jobPostings);
  }, []);

  useEffect(() => {
    setJobList(
      props.jobPostings.filter(posting =>
        posting.title.toLowerCase().includes(search)
      )
    );
  }, [search]);

  const handleSearch = e => {
    return setSearch(e.target.value.toLowerCase());
  };

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
      <input
        type="text"
        placeholder="Search.."
        onChange={e => handleSearch(e)}
      />
      <hr />
      {search == ""
        ? props.jobPostings.map(jobPost => (
            <JobPosting jobPost={jobPost} key={jobPost.id} />
          ))
        : jobList.map(jobPost => (
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
