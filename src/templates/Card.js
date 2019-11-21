import styled from "styled-components";

export const Card = styled.div`
  background-color: ${props => props.color};
  justify-self: center;
  align-self: center;
  height: 90%;
  width: 90%;
  transition: width 0.6s;
  transition: height 0.6s;

  &:hover {
    height: 95%;
    width: 95%;
  }
`;
