import React, { useEffect } from "react";
import axios from "axios";

import { CandidateStyle } from "../templates/Candidates";

export default props => {
  const {
    DNI,
    fullName,
    age,
    jobTitle,
    CV,
    address,
    expectedSalary
  } = props.candidate;

  return (
    <CandidateStyle>
      <input
        type="checkbox"
        onClick={e => {
          const memes = e.target.checked
            ? "S-senpai, my button feels funny"
            : "Je suis Nisman.";
          console.log(memes);
        }}
      ></input>
      <h3>{fullName}</h3>
      <span>{jobTitle}</span>
    </CandidateStyle>
  );
};
