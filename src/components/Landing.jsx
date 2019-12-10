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
      "https://www.totalbusinessmagazine.com/Total-Business/wp-content/uploads/2018/07/Could-a-Diverse-Workforce-Win-You-More-Customers.jpg",
    client:
      "https://news.blr.com/app/uploads/sites/3/2018/07/Workers-Diverse-5.jpg"
  };

  return (
    <LandingGrid>
      <Card color="yellow" imgUrl={recruiter}>
        <div style={topDivStyle}>
          <H2>Reclutadoras</H2>
          <P>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque est
            dolorem perspiciatis perferendis inventore explicabo optio harum ad
            possimus quaerat!
          </P>
        </div>
        <div style={botDivStyle}>
          <LoginModal role={"recruiter"} />
          <RegisterModalRecrClient role={"recruiter"} />
        </div>
      </Card>
      <Card color="cyan" imgUrl={client}>
        <div style={topDivStyle}>
          <H2>Clientes</H2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odio
            ipsum in libero, ea fugit natus sunt aut quisquam magnam.
          </P>
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
  textAlign: "center"
};

const mapStateToProps = state => ({
  user: state.session.user
});

export default connect(mapStateToProps, null)(Landing);
