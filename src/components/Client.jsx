import { ClientStyle } from "../templates/ClientStyle";
import React from "react";
import { connect } from "react-redux";

function Client({ client, session, postSingleClient, history }) {
  const clickHandler = () => {
    postSingleClient(client.id);
    history.push(`/auth/admin/clients/${client.id}`);
  };

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
        {session.user.type === "admin" ? (
          <button onClick={() => clickHandler()}> Editar Cliente</button>
        ) : null}
      </div>
    </ClientStyle>
  );
}

const mapStateToProps = ({ clientList }) => ({
  clientList
});

export default connect(mapStateToProps)(Client);
