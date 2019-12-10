import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Client from "../components/Client";
import RegisterModalRecrClient from "../components/RegisterModalRecrClient";
import { FullDash } from "../templates/Dashboard";

import { fetchClientList, postSingleClient } from "../store/actions/clients";

function AdminClients({
  clientList,
  fetchClientList,
  session,
  postSingleClient,
  ...rest
}) {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchClientList();
    setClients(clientList);
  }, []);

  useEffect(() => {
    if (search == "") return setClients(clientList);

    return setClients(
      clientList.filter(
        client =>
          client.fullName.toLowerCase().includes(search) ||
          client.email.toLowerCase().includes(search) ||
          client.permissions.toLowerCase().includes(search)
      )
    );
  }, [search]);

  const handleSearch = e => {
    return setSearch(e.target.value.toLowerCase());
  };

  return (
    <FullDash>
      <hr />
      <input
        type="text"
        placeholder="Search.."
        onChange={e => handleSearch(e)}
      />
      <RegisterModalRecrClient role={"client"} />
      <hr />
      {search === ""
        ? clientList.map(client => (
            <Client
              client={client}
              session={session}
              postSingleClient={postSingleClient}
              key={client.id}
              history={rest.history}
            />
          ))
        : clients.map(client => (
            <Client
              client={client}
              session={session}
              postSingleClient={postSingleClient}
              key={client.id}
              history={rest.history}
            />
          ))}
    </FullDash>
  );
}

const mapStateToProps = ({ clientList, session }) => ({
  clientList,
  session
});

const mapDispatchToProps = {
  fetchClientList,
  postSingleClient
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminClients);
