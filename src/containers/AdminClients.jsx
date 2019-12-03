import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Client } from "../components/Client";
import { FullDash } from "../templates/Dashboard";

import { fetchClientList } from "../store/actions/clients";

function AdminClients({ clientList, fetchClientList }) {
  useEffect(() => {
    fetchClientList();
  }, []);

  return (
    <FullDash>
      {clientList.map(client => (
        <Client client={client} key={client.id} />
      ))}
    </FullDash>
  );
}

const mapStateToProps = ({ clientList }) => ({
  clientList
});
const mapDispatchToProps = {
  fetchClientList
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminClients);
