import styled from "styled-components";

export const CandidateStyle = styled.div`
  height: 8rem;
  width: 95%;

  margin: 2.5%;

  background-color: rgb(${props => props.theme.SpanishOrangeSoft});
  border: 3px solid rgb(${props => props.theme.RichBlack});
  justify-self: center;
  display: block;
`;


export const PostingStyle = styled.div`
  background-color: ${props => props.backgroundColor};
  border: red 3px solid;
  justify-self: center;
  width: 95%;
  margin: 2.5%;
  display: block;
`;
