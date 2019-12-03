import { ClientStyle } from "../templates/ClientStyle";

import React from "react";

export function Recruiter({ recruiter }) {
  return (
    <ClientStyle>
      <h2> {recruiter.fullName}</h2>
      <ul>
        <li>email: {recruiter.email}</li>
      </ul>
      <select defaultValue={recruiter.permissions}>
        <option>pendiente</option>
        <option>activo</option>
        <option>inactivo</option>
      </select>
      {recruiter.logoURL && <img src={recruiter.logoURL} alt="" />}
      {recruiter.website && <a href={recruiter.website}>Visitar el website.</a>}
    </ClientStyle>
  );
}
