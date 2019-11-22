import React from "react";

import { LandingGrid } from "../templates/LandingGrid";
import { Card } from "../templates/Card";
import { H2 } from "../templates/Title";
import { P } from "../templates/Paragraph";
import LoginModal from "./LoginModal";
import AdminRegisterModal from "./AdminRegisterModal";
import RecrClientRegisterModal from "./RecrClientRegisterModal";

export default props => {
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
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            dignissimos delectus tempora nesciunt, pariatur in eaque esse
            quaerat reprehenderit ipsam commodi sint odio eum eos fuga autem,
            at, itaque placeat laudantium aperiam! Debitis dolorum pariatur
            delectus aperiam fuga optio culpa.
          </P>
        </div>
        <div style={botDivStyle}>
          <LoginModal role={"Admin"} />
          <AdminRegisterModal role={"Admin"} />
        </div>
      </Card>

      <Card color="yellow" imgUrl={recruiter}>
        <div style={topDivStyle}>
          <H2>Reclutadores</H2>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            dignissimos delectus tempora nesciunt, pariatur in eaque esse
            quaerat reprehenderit ipsam commodi sint odio eum eos fuga autem,
            at, itaque placeat laudantium aperiam! Debitis dolorum pariatur
            delectus aperiam fuga optio culpa.
          </P>
        </div>
        <div style={botDivStyle}>
          <LoginModal role={"Recruiter"} />
          <RecrClientRegisterModal role={"Recruiter"} />
        </div>
      </Card>
      <Card color="cyan" imgUrl={client}>
        <div style={topDivStyle}>
          <H2>Clientes</H2>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            dignissimos delectus tempora nesciunt, pariatur in eaque esse
            quaerat reprehenderit ipsam commodi sint odio eum eos fuga autem,
            at, itaque placeat laudantium aperiam! Debitis dolorum pariatur
            delectus aperiam fuga optio culpa.
          </P>
        </div>
        <div style={botDivStyle}>
          <LoginModal role={"Client"} />
          <RecrClientRegisterModal role={"Client"} />
        </div>
      </Card>
    </LandingGrid>
  );
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
