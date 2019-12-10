import React from "react";
import axios from "axios";

import { Button } from "../templates/Button";
import { AdminStyle } from "../templates/AdminStyle";

function Admin({ admin }) {
  const handleDelete = () => {
    if (admin.id === 1) {
      return alert("No se puede borrar este Administrador!");
    }

    const confirm = prompt(
      `Esta seguro que quiere borrar este Administrador? LOS CAMBIOS SON PERMANENTES! Escribe "SI" para continuar`,
      "NO"
    );

    if (confirm === "SI") {
      axios.delete(`/api/admin/admins/${admin.id}`).then(res => {
        alert(res.data);
        location.reload();
      });
    }
  };

  return (
    <AdminStyle>
      <div style={{ height: "95%", margin: "2.5%" }}>
        <p>Nombre: {admin.fullName}</p>
        <p>email: {admin.email}</p>
        <p>ID: {admin.id}</p>
        <Button onClick={handleDelete}>Eliminar Administrador</Button>
      </div>
    </AdminStyle>
  );
}

export default Admin;
