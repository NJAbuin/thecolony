import styled from "styled-components";

export const LandingGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "log1 log2 log3";
  height: 100vh;
`;
