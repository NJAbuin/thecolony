import React from "react";
import { connect } from "react-redux";

import { Client } from '../components/Client'
import { FullDash } from '../templates/Dashboard'

function AdminClients({ clientList }) {

    return (<FullDash>
        {clientList.map(client =>
            <Client client={client} />
        )}
    </FullDash>
    );
}

const mapStateToProps = ({ clientList }) => ({
    clientList
})

export default connect(mapStateToProps)(AdminClients);
