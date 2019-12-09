import React from "react";

import { AdminStyle } from "../templates/AdminStyle";

function Admin(props) {
  return (
    <AdminStyle>
      <div style={{ color: "blue", backgroundColor: "grey" }}>
        <p>Nombre: {props.admin.fullName}</p>
        <p>email: {props.admin.email}</p>
        <p>ID: {props.admin.id}</p>
      </div>
    </AdminStyle>
  );
}

export default Admin;
