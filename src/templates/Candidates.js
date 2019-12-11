import styled from "styled-components";

export const CandidateStyle = styled.div`
  height: auto;
  width: 95%;
  margin: 2.5%;

  justify-self: center;
  display: block;

  background-color: rgb(
    ${props =>
      props.backgroundColor
        ? props.backgroundColor
        : props.theme.SpanishOrangeSoft}
  );
  border: 3px solid rgba(${props => props.theme.RichBlack}, 0.8);
  border-radius: 6px;
`;

export const PostingStyle = styled.div`
  background-color: rgba(${props => props.theme.CeruleanBlue}, 0.75);
  border: red 3px solid;
  justify-self: center;
  width: 95%;
  margin: 2.5%;
  display: block;
  align-content: center;
`;
