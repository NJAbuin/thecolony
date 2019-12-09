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
          <P>{lor.em}</P>
        </div>
        <div style={botDivStyle}>
          <LoginModal role={"recruiter"} />
          <RegisterModalRecrClient role={"recruiter"} />
        </div>
      </Card>
      <Card color="cyan" imgUrl={client}>
        <div style={topDivStyle}>
          <H2>Clientes</H2>
          <P>{lor.em}</P>
        </div>
        <div style={botDivStyle}>
          <LoginModal role={"client"} />
          <RegisterModalRecrClient role={"client"} />
        </div>
      </Card>
    </LandingGrid>
  );
}

const lor = {
  em: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            tempore sint reiciendis magnam rerum voluptas doloremque recusandae,
            quia sit, repellendus corporis deserunt enim fugiat eos, veniam
            sunt? Possimus labore deleniti similique, voluptate sapiente ullam
            dolorum nesciunt nisi atque provident explicabo molestias tempora
            suscipit pariatur? Earum molestiae ea numquam alias sit in
            repellendus explicabo saepe voluptatum ut, corporis ullam
            consequuntur molestias accusamus placeat laborum obcaecati aut velit
            soluta porro quae cum quis! Non tempore, tenetur a repudiandae rerum
            modi eos repellendus perspiciatis eaque dolor, recusandae id. Nobis
            tenetur cupiditate facilis officia omnis qui tempore error magni
            blanditiis placeat ducimus, dolorum voluptatum?`
};

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

export default connect(
  mapStateToProps,
  null
)(Landing);
