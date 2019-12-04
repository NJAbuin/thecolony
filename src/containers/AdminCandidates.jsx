import React, { useEffect } from "react";
import { connect } from 'react-redux'

import Candidate from '../components/Candidate'
import { getCandidateList } from '../store/actions/candidates'

import { FullDash } from '../templates/Dashboard'

function AdminCandidates(props) {
    useEffect(() => {
        props.getCandidateList();
    }, [])

    return (
        <FullDash>
            {props.candidateList.map(candidate => <Candidate key={candidate.id} candidate={candidate} />)}
        </FullDash>
    );
}

const mapStateToProps = ({ candidateList }) => ({
    candidateList
})

const mapDispatchToProps = {
    getCandidateList
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCandidates);
