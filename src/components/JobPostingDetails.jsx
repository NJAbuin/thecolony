import React, { useEffect } from "react";
import { JobPostStyle } from "../templates/JobPostStyle";
import { selectJobPostToState } from "../store/actions/jobPostings";
import { connect } from "react-redux";
import { userInfo } from "os";
import { deleteJobPosting } from "../store/actions/jobPostings";

function JobPostingDetails(props) {
  useEffect(() => props.selectJobPostToState(props.match.params.id), []);

  const deleteHandler = e => {
    let confirmation = confirm(
      "¿Queres borrar esta busqueda? Los datos de ella seran borrados permanentemente! Click en confirmar para continuar"
    );

    if (confirmation) {
      props.deleteJobPosting(props.match.params.id);
      alert("Busqueda borrada con exito");
      props.history.push("/auth/admin/jobposting/");
    }
  };

  const editHandler = e => {
    props.history.push(`/auth/admin/jobposting/edit/${props.match.params.id}`);
  };

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

      {props.userType === "admin" || props.userType === "client" ? (
        <div>
          <button onClick={e => editHandler()}>Editar</button>
          <button onClick={e => deleteHandler()}>Borrar</button>
        </div>
      ) : null}
    </JobPostStyle>
  );
}

const mapStateToProps = state => ({
  jobPostingSelected: state.jobPostingSelected,
  userType: state.session.user.type
});

const mapDispatchToProps = {
  selectJobPostToState,
  deleteJobPosting
};

export default connect(mapStateToProps, mapDispatchToProps)(JobPostingDetails);
