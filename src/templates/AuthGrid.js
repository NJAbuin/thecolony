import styled from "styled-components";

export const AuthGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 20vw 1fr;
  grid-template-areas: "sidebar content";
  height: 100vh;
`;
