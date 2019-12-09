import styled from "styled-components";

export const InfoParagraph = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1, 1em;
  color: black;
  text-align: center;
  margin-top: 1.05rem;
`;

export const H1 = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  color: black;
  text-align: center;
  margin-top: 1rem;
`;

export const H2 = styled.h2`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};
  color: black;
  text-align: center;
  margin-top: 2rem;
`;

export const H5 = styled.h5`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};
  color: black;
  padding: 3px 0px 3px 0px;
  margin: 0;
`;

export const P = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};
  color: ${props => props.theme.color};
  text-align: center;
  background-color: rgba(2, 10, 20, 0.4);
  margin-top: 2rem;
`;
