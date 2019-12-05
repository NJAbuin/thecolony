import { ClientStyle } from "../templates/ClientStyle";

import React from "react";

export function Client({ client, session, match }) {
  return (
    <ClientStyle>
      <h2> {client.fullName}</h2>
      <ul>
        <li>email: {client.email}</li>
      </ul>
      {client.logoURL && <img src={client.logoURL} alt="" />}
      {client.website && <a href={client.website}>Visitar el website.</a>}
      {session.user.type === "admin" ? (
        <button onClick={e => {}}> Editar Cliente</button>
      ) : null}
    </ClientStyle>
  );
}
