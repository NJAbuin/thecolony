import { ClientStyle } from "../templates/ClientStyle";
import { connect } from "react-redux";
import axios from "axios";

import React from "react";

export function Recruiter({ recruiter }) {
  const changePermissions = value => {
    axios
      .put(`/api/admin/recruiters/${recruiter.id}`, { permissions: value })
      .then(res => console.log(res));
  };

  return (
    <ClientStyle>
      <h2> {recruiter.fullName}</h2>
      <ul>
        <li>email: {recruiter.email}</li>
        <li>
          estado: &nbsp;
          <select
            defaultValue={recruiter.permissions}
            onChange={e => changePermissions(e.target.value)}
          >
            <option value={"pendiente"}>pendiente</option>
            <option value={"activo"}>activo</option>
            <option value={"inactivo"}>inactivo</option>
          </select>
        </li>
      </ul>

      {recruiter.logoURL && <img src={recruiter.logoURL} alt="" />}
      {recruiter.website && <a href={recruiter.website}>Visitar el website.</a>}
    </ClientStyle>
  );
}

const mapStateToProps = ({ recruitersList }) => ({
  recruitersList
});

export default connect(mapStateToProps)(Recruiter);
