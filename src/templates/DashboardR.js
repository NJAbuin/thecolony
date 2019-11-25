import styled from "styled-components";

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
