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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            earum reiciendis ex cupiditate iste iusto labore nisi? Dicta
            dolorem, nulla laudantium a sint commodi cupiditate aut quod velit
            laboriosam minima ipsam unde at. Laboriosam aperiam, harum, placeat
            doloribus inventore numquam porro autem nostrum optio natus
            blanditiis officiis at aut ducimus nihil expedita asperiores
            eligendi consequatur, velit voluptates neque. Deleniti, neque.
            Incidunt modi sit enim unde et ipsa ipsam tempore quis? Ipsa debitis
            rem hic. Adipisci neque obcaecati nulla sint fuga quae laborum at.
            Cum excepturi laboriosam est cupiditate voluptatibus magnam. Error
            earum, reprehenderit nisi ipsum quae nam laboriosam sapiente
            veritatis!
          </P>
        </div>
        <div style={botDivStyle}>
          <LoginModal role={"Admin"} />
          <AdminRegisterModal role={"Admin"} />
        </div>
      </Card>

      <Card color="yellow" imgUrl={recruiter}>
        <div style={topDivStyle}>
          <H2>Reclutadoras</H2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum,
            inventore cupiditate, dolores optio, accusantium voluptatum nemo
            totam obcaecati ratione est tempora maxime? Fuga, atque explicabo
            nisi nihil error, maxime deleniti, magni repellendus vitae molestias
            quas deserunt assumenda. Doloremque, error! Distinctio mollitia aut
            impedit omnis consectetur exercitationem maiores, unde molestias
            cupiditate laboriosam provident commodi aliquam quaerat adipisci
            possimus beatae quos eveniet aspernatur. Voluptatem reiciendis
            similique incidunt eligendi, accusamus reprehenderit cum debitis
            ipsam aut necessitatibus nisi iure nobis, non, sequi quo doloribus
            ut enim officiis qui amet et? Ullam, nihil, laudantium perferendis
            et sequi a quae dignissimos ratione, quasi est vero.
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
            blanditiis placeat ducimus, dolorum voluptatum?
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
