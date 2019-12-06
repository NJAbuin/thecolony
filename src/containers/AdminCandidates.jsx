import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Candidate from "../components/Candidate";
import { getCandidateList } from "../store/actions/candidates";

import { FullDash } from "../templates/Dashboard";

function AdminCandidates(props) {
  const [candList, setCandList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.getCandidateList();
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

const mapStateToProps = ({ candidateList }) => ({
  candidateList
});

const mapDispatchToProps = {
  getCandidateList
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminCandidates);
