import styled from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 5vh 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "nav nav"
    "body body";
  height: 100vh;
  box-sizing: border-box;
`;

/*
const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 5vh 1fr;
  grid-template-columns: 12vw 1fr;
  grid-template-areas:
    "nav nav"
    "sidebar content";
  height: 100vh;
`;
*/
