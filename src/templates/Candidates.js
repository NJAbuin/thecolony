import styled from "styled-components";

export const CandidateStyle = styled.div`
  background-color: ${props => props.backgroundColor};
  border: blue 3px solid;
  justify-self: center;
  height: 8rem;
  width: 95%;
//  overflow:hidden;
  margin: 2.5%;
  display: block;
`;


export const PostingStyle = styled.div`
  background-color: ${props => props.backgroundColor};
  border: red 3px solid;
  justify-self: center;
//  overflow: visible;
  width: 95%;
  margin: 2.5%;
  display: block;
`;
