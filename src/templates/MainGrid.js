import styled from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 7.5% 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "nav nav"
    "body body";
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;
