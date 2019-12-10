import { RecruiterStyle } from "../templates/RecruiterStyle";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../templates/Button";
import { postSingleRecruiter } from "../store/actions/recruiters";
import axios from "axios";

import React from "react";

export function Recruiter(props) {
  const changePermissions = value =>
    axios
      .put(`/api/admin/recruiters/${props.recruiter.id}`, {
        permissions: value
      })
      .then(res => res.data)
      .then(updated => console.log(updated));

  const handleDelete = e => {
    const confirm = prompt(
      `Esta seguro que quiere borrar este recrutador? LOS CAMBIOS SON PERMANENTES! Escribe "SI" para continuar`,
      "NO"
    );
    if (confirm === "SI") {
      axios.delete(`/api/admin/recruiters/${props.recruiter.id}`).then(res => {
        alert(res.data);
      });
    }
  };

  const clickHandler = () => {
    props
      .postSingleRecruiter(props.recruiter.id)
      .then(() =>
        props.history.push(`/auth/admin/recruiters/${props.recruiter.id}`)
      );
  };

  return (
    <RecruiterStyle>
      <h2> {props.recruiter.fullName}</h2>
      <ul>
        email: {props.recruiter.email}
        <br />
        estado: &nbsp;
        <select
          defaultValue={props.recruiter.permissions}
          onChange={e => changePermissions(e.target.value)}
        >
          <option value={"pendiente"}>pendiente</option>
          <option value={"activo"}>activo</option>
          <option value={"inactivo"}>inactivo</option>
        </select>
      </ul>
      {props.recruiter.logoURL && <img src={props.recruiter.logoURL} alt="" />}
      {props.recruiter.website && (
        <a href={props.recruiter.website}>Visitar el website.</a>
      )}
      <Button onClick={handleDelete}>ELIMINAR</Button>

      <Button onClick={() => clickHandler()} user={props.recruiter}>
        EDITAR
      </Button>
    </RecruiterStyle>
  );
}

const mapStateToProps = ({ recruitersList }) => ({
  recruitersList
});

// const mapDispatchToProps = dispatch => ({
//   postSingleRecruiter: dispatch(postSingleRecruiter)
// });

export default connect(mapStateToProps, null)(Recruiter);
