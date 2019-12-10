import { RecruiterStyle } from "../templates/RecruiterStyle";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../templates/Button";
import axios from "axios";

import React from "react";

export function Recruiter({ recruiter, history }) {
  const changePermissions = value =>
    axios
      .put(`/api/admin/recruiters/${recruiter.id}`, { permissions: value })
      .then(res => res.data)
      .then(updated => console.log(updated));

  const handleDelete = e => {
    const confirm = prompt(
      `Esta seguro que quiere borrar este recrutador? LOS CAMBIOS SON PERMANENTES! Escribe "SI" para continuar`,
      "NO"
    );
    if (confirm === "SI") {
      axios.delete(`/api/admin/recruiters/${recruiter.id}`).then(res => {
        alert(res.data);
      });
    }
  };

  const clickHandler = () => {};

  return (
    <RecruiterStyle>
      <h2> {recruiter.fullName}</h2>
      <ul>
        email: {recruiter.email}
        <br />
        estado: &nbsp;
        <select
          defaultValue={recruiter.permissions}
          onChange={e => changePermissions(e.target.value)}
        >
          <option value={"pendiente"}>pendiente</option>
          <option value={"activo"}>activo</option>
          <option value={"inactivo"}>inactivo</option>
        </select>
      </ul>
      {recruiter.logoURL && <img src={recruiter.logoURL} alt="" />}
      {recruiter.website && <a href={recruiter.website}>Visitar el website.</a>}
      <Button onClick={handleDelete}>ELIMINAR</Button>
      <Link to="/auth/admin/recruiters/:id">
        <Button onClick={() => clickHandler()} user={recruiter}>
          EDITAR
        </Button>
      </Link>
    </RecruiterStyle>
  );
}

const mapStateToProps = ({ recruitersList }) => ({
  recruitersList
});

export default connect(mapStateToProps)(Recruiter);
