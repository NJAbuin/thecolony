import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Recruiter } from "../components/Recruiter";
import { fetchRecruiterList } from "../store/actions/recruiters";
import RegisterModalRecrClient from "../components/RegisterModalRecrClient";

import { FullDash } from "../templates/Dashboard";

function AdminRecruiters(props) {
  const [recruiters, setRecruiters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.fetchRecruiterList();
    setRecruiters(props.recruitersList);
  }, []);

  useEffect(() => {
    if (search == "") return setRecruiters(props.recruitersList);

    return setRecruiters(
      props.recruitersList.filter(
        recruiter =>
          recruiter.fullName.toLowerCase().includes(search) ||
          recruiter.email.toLowerCase().includes(search) ||
          recruiter.permissions.toLowerCase().includes(search)
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
      <RegisterModalRecrClient role={"recruiter"} />
      <hr />
      {search === ""
        ? props.recruitersList &&
          props.recruitersList.map(recruiter => (
            <Recruiter recruiter={recruiter} key={recruiter.id} />
          ))
        : recruiters &&
          recruiters.map(recruiter => (
            <Recruiter recruiter={recruiter} key={recruiter.id} />
          ))}
    </FullDash>
  );
}

const mapStateToProps = ({ recruitersList }) => ({
  recruitersList
});

const mapDispatchToProps = {
  fetchRecruiterList
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminRecruiters);
