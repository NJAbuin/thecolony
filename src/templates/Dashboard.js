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
  border: orchid 2px solid;
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
  border-top: rgba(${props => props.theme.CoolGray});
  border-right: rgba(${props => props.theme.CoolGray});
  border-left: rgba(${props => props.theme.CoolGray});
  display: block;
  height: 100%;
  width: 100%;
  text-align: center;

  grid-area: "titlebarL";
`;

export const TitleR = styled.div`
  border-top: rgba(${props => props.theme.CoolGray});
  border-right: rgba(${props => props.theme.CoolGray});
  border-left: rgba(${props => props.theme.CoolGray});
  display: block;
  height: 100%;
  width: 100%;
  text-align: center;

  grid-area: "titlebarR";
`;

export const ContentL = styled.div`
  border: red 2px solid;
  display: block;
  height: 100%;
  width: 100%;

  grid-area: "contentL";
`;

export const ContentR = styled.div`
  border: green 2px solid;
  display: block;
  height: 100%;
  width: 100%;

  grid-area: "contentR";
`;
