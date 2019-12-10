import { ClientStyle } from "../templates/ClientStyle";
import React from "react";
import { Button } from "../templates/Button";
import { connect } from "react-redux";
import axios from "axios";

function Client({ client, session, postSingleClient, history }) {
  const clickHandler = () => {
    postSingleClient(client.id);
    history.push(`/auth/admin/clients/${client.id}`);
  };

  const handleDelete = e => {
    const confirm = prompt(
      `Esta seguro que quiere borrar este cliente? LOS CAMBIOS SON PERMANENTES! Escribe "SI" para continuar`,
      "NO"
    );
    if (confirm === "SI") {
      axios.delete(`/api/admin/clients/${client.id}`).then(res => {
        alert(res.data);
      });
    }
  };

  const adminOnlyButtons = (
    <div>
      <Button onClick={() => clickHandler()}> Editar Cliente</Button>
      <Button onClick={handleDelete}>Eliminar Cliente</Button>
    </div>
  );

  return (
    <ClientStyle>
      <div
        style={{
          boxSizing: "border-box",
          padding: "10px, 0px, 10px, 5px",
          marginLeft: "8px"
        }}
      >
        <h2> {client.fullName}</h2>
        email: {client.email}
        {client.logoURL && <img src={client.logoURL} alt="" />}
        {client.website && <a href={client.website}>Visitar el website.</a>}
        <br />
        {session.user.type === "admin" ? adminOnlyButtons : null}
      </div>
    </ClientStyle>
  );
}

const mapStateToProps = ({ clientList }) => ({
  clientList
});

export default connect(mapStateToProps)(Client);
