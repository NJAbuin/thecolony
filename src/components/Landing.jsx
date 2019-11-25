import React from "react";
import { Link } from "react-router-dom";
import { LandingGrid } from "../templates/LayoutGrids";
import { Card } from "../templates/Card";
import { H2, P } from "../templates/Text";

import LoginModal from "./LoginModal";
import AdminRegisterModal from "./AdminRegisterModal";
import RecrClientRegisterModal from "./RecrClientRegisterModal";

import { connect } from "react-redux";

function Landing(props) {
  const { admin, recruiter, client } = {
    admin:
      "https://www.governmentciomedia.com/sites/default/files/styles/featured_article_image/public/2019-05/Closing%20the%20Cyber%20Workforce%20Gap%20by%20Improving%20the%20Pipeline.jpg?itok=3cDmcN0N",
    recruiter:
      "https://www.totalbusinessmagazine.com/Total-Business/wp-content/uploads/2018/07/Could-a-Diverse-Workforce-Win-You-More-Customers.jpg",
    client:
      "https://news.blr.com/app/uploads/sites/3/2018/07/Workers-Diverse-5.jpg"
  };

  return (
    <LandingGrid>
      <Card color="grey" imgUrl={admin}>
        <div style={topDivStyle}>
          <H2>Admin</H2>
          <P>{lor.em}</P>
        </div>
        <div style={botDivStyle}>
          <LoginModal role={"Admin"} />
          <AdminRegisterModal role={"Admin"} />
        </div>
      </Card>

      <Card color="yellow" imgUrl={recruiter}>
        <div style={topDivStyle}>
          <H2>Reclutadoras</H2>
          <P>{lor.em}</P>
        </div>
        <div style={botDivStyle}>
          <LoginModal role={"Recruiter"} />
          <RecrClientRegisterModal role={"Recruiter"} />
        </div>
      </Card>
      <Card color="cyan" imgUrl={client}>
        <div style={topDivStyle}>
          <H2>Clientes</H2>
          <P>{lor.em}</P>
        </div>
        <div style={botDivStyle}>
          <LoginModal role={"Client"} />
          <RecrClientRegisterModal role={"Client"} />
        </div>
      </Card>
      <Link to="/recruiter/candidate">
        TEST LINK to Recruiter new Candidate Form
      </Link>
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

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  user: state.session.user
});

export default connect(
  mapStateToProps,
  null
)(Landing);
