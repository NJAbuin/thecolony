import { RecruiterStyle } from "../templates/RecruiterStyle";
import { connect } from "react-redux";
import axios from "axios";

import React from "react";

export function Recruiter({ recruiter }) {
  const changePermissions = value =>
    axios
      .put(`/api/admin/recruiters/${recruiter.id}`, { permissions: value })
      .then(res => res.data)
      .then(updated => console.log(updated));
  ;

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
      <button>Editar recrutador</button>
    </RecruiterStyle>
  );
}

const mapStateToProps = ({ recruitersList }) => ({
  recruitersList
});

export default connect(mapStateToProps)(Recruiter);
