import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Candidate from "./Candidate";

import {
  candidatesApplyToJob,
  candidatesClearListSelection
} from "../store/actions/candidates";
import { FullDash } from "../templates/Dashboard";

function RecruiterCandidates(props) {
  const [candList, setCandList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setCandList(props.candidateList);
  }, []);

  useEffect(() => {
    if (search == "") return setCandList(props.candidateList);

    return setCandList(
      props.candidateList.filter(
        candidate =>
          candidate.fullName.toLowerCase().includes(search) ||
          candidate.jobTitle.toLowerCase().includes(search)
      )
    );
  }, [search]);

  const handleSearch = e => {
    return setSearch(e.target.value.toLowerCase());
  };
  return (
    <FullDash>
      <hr />
      <Link to="/auth/recruiter/candidates/new">
        <button>CARGAR CANDIDATO</button>
      </Link>
      <br />

      <input
        type="text"
        placeholder="Search.."
        onChange={e => handleSearch(e)}
      />
      <hr />

      {search === ""
        ? props.candidateList.map(candidate => (
            <Candidate key={candidate.id} candidate={candidate} />
          ))
        : candList.map(candidate => (
            <Candidate key={candidate.id} candidate={candidate} />
          ))}
    </FullDash>
  );
}
const mapStateToProps = ({ candidateList, jobPostingSelected }) => ({
  candidateList,
  jobPostingSelected
});

export default connect(mapStateToProps)(RecruiterCandidates);
