import styled from "styled-components";

export const Dashboard = styled.div`
  grid-area: "contentDash";
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-template-areas: "lSide rSide";
  box-sizing: border-box;
`;

export const DashboardL = styled.div`
  grid-area: "lSide";
  background: red;
  display: grid;
  height: 100%;

  grid-template-rows: 10% 1fr;
  grid-template-areas:
    "titlebarL"
    "contentL";
`;

export const DashboardR = styled.div`
  grid-area: "rSide";
  background-color: #333;
  display: grid;

  height: 100%;
  grid-template-rows: 10% 1fr;
  grid-template-areas:
    "titlebarR"
    "contentR";
`;
