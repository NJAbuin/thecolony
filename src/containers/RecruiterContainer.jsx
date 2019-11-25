import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";

import DashboardRecruiter from './DashboardRecruiter'
import RecruiterCandidates from '../components/RecruiterCandidates'
import { getCandidateList } from '../store/actions/candidates'

function RecruiterContainer(props) {
    useEffect(() => {
        props.getCandidateList()
    }, [])

    return (
        <Switch>
            <Route path="/auth/recruiter/dashboard" component={DashboardRecruiter} />
            <Route path="/auth/recruiter/jobpostings" component={DashboardRecruiter} />
            <Route path="/auth/recruiter/candidates" component={RecruiterCandidates} />
        </Switch>
    );
}

const mapDispatchToProps = {
    getCandidateList
}

export default connect(null, mapDispatchToProps)(RecruiterContainer)
