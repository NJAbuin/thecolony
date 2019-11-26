import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";

import RecruiterJobPostings from '../containers/RecruiterJobPostings'
import RecruiterCandidates from '../components/RecruiterCandidates'

import { getCandidateList } from '../store/actions/candidates'
import { getJobPostings } from '../store/actions/jobPostings'

function RecruiterContainer(props) {
    useEffect(() => {
        props.getCandidateList()
        props.getJobPostings()
    }, [])

    return (
        <Switch>
            {/* <Route path="/auth/recruiter/dashboard" component={DashboardRecruiter} /> */}
            <Route path="/auth/recruiter/jobpostings" component={RecruiterJobPostings} />
            <Route path="/auth/recruiter/candidates" component={RecruiterCandidates} />
        </Switch>
    );
}

const mapDispatchToProps = {
    getCandidateList,
    getJobPostings
}

export default connect(null, mapDispatchToProps)(RecruiterContainer)
