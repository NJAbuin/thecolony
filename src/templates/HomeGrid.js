import styled from "styled-components";

export const HomeGrid = styled.div`
  display: grid;
  grid-template-rows: 5vh 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "nav nav"
    "body body";
  height: 100vh;
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
