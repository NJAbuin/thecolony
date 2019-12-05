import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Recruiter } from "../components/Recruiter";
import { fetchRecruiterList } from "../store/actions/recruiters";

import { FullDash } from "../templates/Dashboard";

function AdminRecruiters(props) {
  useEffect(() => {
    props.fetchRecruiterList();
  }, []);

  return (
    <FullDash>
      {props.recruitersList &&
        props.recruitersList.map(recruiter => (
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
