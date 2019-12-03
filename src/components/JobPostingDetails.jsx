import React, { useEffect } from "react";
import { JobPostStyle } from "../templates/JobPostStyle";
import { selectJobPostToState } from "../store/actions/jobPostings";
import { connect } from "react-redux";

function JobPostingDetails(props) {
  useEffect(() => {
    props.selectJobPostToState(props.match.params.id);
  }, []);
  return (
    <JobPostStyle>
      <div>
        Titulo:
        {props.jobPostingSelected.title}
        <br></br>
        Descripcion:
        {props.jobPostingSelected.description}
        <br></br>
        Imagen:
        <img src={props.jobPostingSelected.imgURL} alt="" />
        <br></br>
        Beneficios:
        {props.jobPostingSelected.benefits}
        <br></br>
        Openings:
        {props.jobPostingSelected.openings}
        <br></br>
        Salario:
        {props.jobPostingSelected.salary}
      </div>
    </JobPostStyle>
  );
}

const mapStateToProps = state => ({
  jobPostingSelected: state.jobPostingSelected
});

const mapDispatchToProps = {
  selectJobPostToState
};

export default connect(mapStateToProps, mapDispatchToProps)(JobPostingDetails);
