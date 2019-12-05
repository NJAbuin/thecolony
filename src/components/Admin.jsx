import React from "react";

import { AdminStyle } from "../templates/AdminStyle";
function Admin(props) {
  return (
    <AdminStyle>
      {Object.keys(props.admin).map(prop => (
        <p style={{ color: "white" }} key={prop}>
          {prop}
        </p>
      ))}
    </AdminStyle>
  );
}

export default Admin;
