import styled from "styled-components";

export const Dashboard = styled.div`
  grid-area: "contentDash";
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1%;
  grid-template-areas: "lSide rSide";
  box-sizing: border-box;
`;

export const Left = styled.div`
  grid-area: "lSide";
  display: grid;
  height: 100%;
  width: 100%;

  grid-template-rows: 7% 1fr;
  grid-template-areas:
    "titlebarL"
    "contentL";
`;

export const Right = styled.div`
  grid-area: "rSide";
  background-color: #333;
  display: grid;

  height: 100%;
  width: 100%;

  grid-template-rows: 7% 1fr;
  grid-template-areas:
    "titlebarR"
    "contentR";
`;

export const TitleL = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  text-align: center;

  grid-area: "titlebarL";
`;

export const TitleR = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  text-align: center;

  grid-area: "titlebarR";
`;

export const ContentL = styled.div`

  display: block;
  height: 100%;
  width: 100%;

  grid-area: "contentL";
`;

export const ContentR = styled.div`

  display: block;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  grid-area: "contentR";
`;
