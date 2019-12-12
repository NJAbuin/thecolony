import React from "react";
import { LandingGrid } from "../templates/LayoutGrids";
import { Card } from "../templates/Card";
import { H2, P } from "../templates/Text";

import LoginModal from "./LoginModal";
import RegisterModalRecrClient from "./RegisterModalRecrClient";

import { connect } from "react-redux";

function Landing(props) {
  const { recruiter, client } = {
    recruiter:
      "https://images.unsplash.com/photo-1508785166660-30ce4484f45c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    client:
      "https://news.blr.com/app/uploads/sites/3/2018/07/Workers-Diverse-5.jpg"
  };

  return (
    <LandingGrid>
      <Card color="yellow" imgUrl={recruiter}>
        <div style={topDivStyle}>
          <P>Reclutadoras</P>
        </div>
        <div style={botDivStyle}>
          <LoginModal role={"recruiter"} />
          <RegisterModalRecrClient role={"recruiter"} />
        </div>
      </Card>
      <Card color="cyan" imgUrl={client}>
        <div style={topDivStyle}>
          <P>Clientes</P>
        </div>
        <div style={botDivStyle}>
          <LoginModal role={"client"} />
          <RegisterModalRecrClient role={"client"} />
        </div>
      </Card>
    </LandingGrid>
  );
}

const topDivStyle = {
  width: "100%",
  height: "80%"
};

const botDivStyle = {
  justifyContent: "space-around",
  width: "100%",
  height: "20%",
  marginBottom: "5rem",
  textAlign: "center"
};

const mapStateToProps = state => ({
  user: state.session.user
});

export default connect(mapStateToProps, null)(Landing);
