import React, { useEffect } from "react";
import { connect } from "react-redux";

import { CandidateStyle } from "../templates/Candidates";
import { candidateFetchDetails } from '../store/actions/candidates'

export function CandidateDetails(props) {
    console.log(props)
    const {
        id,
        DNI,
        fullName,
        age,
        jobTitle,
        CV,
        address,
        expectedSalary
    } = props.candidateDetails;
    useEffect(() => props.candidateFetchDetails(1)
        , [])



    const showCV = () =>
        window.open(`${CV.replace("dist", "")}`, "_blank")


    return (
        <CandidateStyle>

            <h3>{fullName}</h3>
            <span>{jobTitle}</span>
            <br />
            <button onClick={e => showCV(e)}>Ver CV</button>
        </CandidateStyle>
    );
}

const mapStateToProps = ({ candidateDetails, candidateList }) => ({
    candidateDetails,
    candidateList
})

const mapDispatchToProps = {
    candidateFetchDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateDetails);
