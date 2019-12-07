import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Client } from "../components/Client";
import RecrClientRegisterModal from "../components/RecrClientRegisterModal";
import { FullDash } from "../templates/Dashboard";

import { fetchClientList } from "../store/actions/clients";

function AdminClients({ clientList, fetchClientList, session }) {
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
      <RecrClientRegisterModal role={"client"} />
      <hr />
      {search === ""
        ? clientList.map(client => (
            <Client client={client} session={session} key={client.id} />
          ))
        : clients.map(client => (
            <Client client={client} session={session} key={client.id} />
          ))}
    </FullDash>
  );
}

const mapStateToProps = ({ clientList, session }) => ({
  clientList,
  session
});

const mapDispatchToProps = {
  fetchClientList
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminClients);
