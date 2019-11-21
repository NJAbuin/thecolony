import React from "react";

import { LandingGrid } from "../templates/LandingGrid";
import { Card } from "../templates/Card";

export default props => {
  return (
    <LandingGrid>
      <Card
        color="grey"
        imgUrl="https://www.governmentciomedia.com/sites/default/files/styles/featured_article_image/public/2019-05/Closing%20the%20Cyber%20Workforce%20Gap%20by%20Improving%20the%20Pipeline.jpg?itok=3cDmcN0N"
      ></Card>
      <Card
        color="cyan"
        imgUrl="https://news.blr.com/app/uploads/sites/3/2018/07/Workers-Diverse-5.jpg"
      ></Card>
      <Card
        color="yellow"
        imgUrl="https://www.totalbusinessmagazine.com/Total-Business/wp-content/uploads/2018/07/Could-a-Diverse-Workforce-Win-You-More-Customers.jpg"
      ></Card>
    </LandingGrid>
  );
};
