import styled from "styled-components";

export const SidebarButton = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1.2rem;
  color: ${props => props.theme.color};
  text-align: center;
  background-color: rgba(2, 10, 20, 0.4);

  margin: 0;
  padding: 20px;
  background-color: none;
  margin: 10px 0px;

  transition: border-radius 0.475s;
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 0, 0, 0.5);
    border-radius: 50px;
  }
`;
