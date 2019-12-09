import React from "react";

import { AdminStyle } from "../templates/AdminStyle";

function Admin(props) {
  return (
    <AdminStyle>
      <div style={{ height: "95%", margin: "2.5%" }}>
        <p>Nombre: {props.admin.fullName}</p>
        <p>email: {props.admin.email}</p>
        <p>ID: {props.admin.id}</p>
      </div>
    </AdminStyle>
  );
}

export default Admin;
