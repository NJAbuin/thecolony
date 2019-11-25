import styled from "styled-components";

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
