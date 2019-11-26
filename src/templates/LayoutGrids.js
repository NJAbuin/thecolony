import styled from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 5% 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "nav"
    "body";
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

export const LandingGrid = styled.div`
  display: grid;
  background-color: orangered;
  grid-template-columns: repeat(3, 33.33vw);
  height: 100%;
  width: 100%;
`;

export const AuthGrid = styled.div`
  grid-area: body;
  display: grid;
  grid-template-columns: 12vw 1fr;
  grid-column-gap: 1%;
  grid-template-areas: "sidebar contentDash";
  height: 100%;
  width: 100%;
`;
