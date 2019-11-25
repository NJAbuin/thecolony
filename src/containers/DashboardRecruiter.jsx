import React, { useState } from "react";

import JobPosting from "../components/JobPosting";
import {
  Dashboard,
  Left,
  Right,
  TitleL,
  TitleR,
  ContentL,
  ContentR
} from "../templates/Dashboard";


function DashboardRecruiter(props) {
  return (
    <Dashboard>
      <Left>
        <TitleL>
          <span style={{ display: "inline-block", padding: "25px" }}>
            BUSQUEDAS LABORALES
          </span>
        </TitleL>
        <ContentL>
          {[exJobPost, exJobPost2].map(jobPost => (
            <JobPosting jobPost={jobPost} />
          ))}
        </ContentL>
      </Left>

      <Right>
        <TitleR>CANDIDATES</TitleR>
        <ContentR></ContentR>
      </Right>
    </Dashboard>
  );
}

const exJobPost = {
  title: "Cajero Elefante",
  description: "Hace cambio",
  salary: 100,
  workload: 9,
  startingDate: new Date().toString(),
  imgURL: "",
  benefits: "es rico",
  openings: 3,
  client: "Jumbo"
};

const exJobPost2 = {
  title: "Cukoloco",
  description: "mm vinacho",
  salary: 720,
  workload: 3,
  startingDate: new Date().toString(),
  imgURL: "",
  benefits: "me gusta",
  openings: 3,
  client: "Ricardo"
};

export default DashboardRecruiter;
