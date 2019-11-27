import React, { useEffect } from 'react'
import { JobPostStyle } from "../templates/JobPostStyle";
import { getJobPostingDetails } from '../store/actions/jobPostings'
import { connect } from "react-redux"

function JobPostingDetails(props) {
    useEffect(() => props.getJobPostingDetails(props.match.params.id), []);
    console.log(props.jobPosting)
    return (
        <JobPostStyle>
            <div>
            </div>
        </JobPostStyle>
    )
}

const mapStateToProps = (state) => ({
    jobPosting: state.jobPostings
})

const mapDispatchToProps = {
    getJobPostingDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPostingDetails)
