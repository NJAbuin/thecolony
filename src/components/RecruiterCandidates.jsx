import React, { useEffect } from "react";
import axios from 'axios'

import Candidate from './Candidate'
import { CanContainer } from '../templates/Candidates'
import { candidateList } from '../store/actions/candidates'

export default props => {

    return (<CanContainer>

        {[can1, can2, can2, can1].map(candidate => <Candidate candidate={candidate} />)}

    </CanContainer>
    );
};

const can1 = {
    DNI: 123123,
    fullName: 'Carlo chota',
    age: 34,
    jobTitle: 'cuck',
    CV: 'asdas',
    address: 'heshu 11',
    expectedSalary: 17777,
}

const can2 = {
    DNI: 6553,
    fullName: 'Ber gamota',
    age: 1,
    jobTitle: 'brasil',
    CV: 'kkkkk',
    address: 'cullll',
    expectedSalary: 1000,
}