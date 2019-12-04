import React, { useEffect } from "react";
import { connect } from 'react-redux'

import Admin from '../components/Admin'
import { getAdminList } from '../store/actions/admins'

import { FullDash } from '../templates/Dashboard'

function AdminAdmins(props) {
    useEffect(() => {
        props.getAdminList();
    }, [])

    return (
        <FullDash>
            {props.adminList.map(admin => <Admin key={admin.id} admin={admin} />)}
        </FullDash>
    );
}

const mapStateToProps = ({ adminList }) => ({
    adminList
})

const mapDispatchToProps = {
    getAdminList
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAdmins);
