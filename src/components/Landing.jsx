import React from "react";

import { LandingGrid } from "../templates/LandingGrid";
import { Card } from "../templates/Card";
import LoginModal from "./LoginModal";
import AdminRegisterModal from "./AdminRegisterModal";
import RecrClientRegisterModal from "./RecrClientRegisterModal";

export default props => {
  const landImgs = {
    admin:
      "https://www.governmentciomedia.com/sites/default/files/styles/featured_article_image/public/2019-05/Closing%20the%20Cyber%20Workforce%20Gap%20by%20Improving%20the%20Pipeline.jpg?itok=3cDmcN0N",
    recruiter:
      "https://www.totalbusinessmagazine.com/Total-Business/wp-content/uploads/2018/07/Could-a-Diverse-Workforce-Win-You-More-Customers.jpg",
    client:
      "https://news.blr.com/app/uploads/sites/3/2018/07/Workers-Diverse-5.jpg"
  };

  return (
    <LandingGrid>
      <Card color="grey" imgUrl={landImgs.admin}>
        <h2>Admin</h2>
        <p>Lorem ipsum dolor</p>
        <LoginModal />
        <AdminRegisterModal role={"Admin"} />
      </Card>

      <Card color="yellow" imgUrl={landImgs.recruiter}>
        <h2>Recrutadores</h2>
        <p>Lorem ipsum dolor</p>
        <LoginModal />
        <RecrClientRegisterModal role={"Recruiter"} />
      </Card>

      <Card color="cyan" imgUrl={landImgs.client}>
        <h2>Clientes</h2>
        <p>Lorem ipsum dolor</p>
        <LoginModal />
        <RecrClientRegisterModal role={"Client"} />
      </Card>
    </LandingGrid>
  );
};
