import React, { useEffect } from "react";
import axios from 'axios'

import { CandidateStyle } from '../templates/Candidates'


export default props => {
    const { DNI, fullName, age, jobTitle, CV, address, expectedSalary } = props.candidate

    return (<CandidateStyle>
        '<h3>{fullName}</h3>
        <span>{jobTitle}</span>'
    </CandidateStyle>
    );
};
