import styled from "styled-components";

export const P = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};
  color: ${props => props.theme.color};
  text-align: center;
  background-color: rgba(2, 10, 20, 0.4);
  margin-top: 2rem;
`;
