import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Client } from "../components/Client";
import { FullDash } from "../templates/Dashboard";

import { fetchClientList } from "../store/actions/clients";

function AdminClients({ clientList, fetchClientList, session }) {
  useEffect(() => {
    fetchClientList();
  }, []);

  return (
    <FullDash>
      {clientList.map(client => (
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminClients);
