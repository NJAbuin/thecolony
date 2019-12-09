import styled from "styled-components";

export const SidebarButton = styled.p`
  color: ${props => props.theme.color};
  font-family: ${props => props.theme.fontFamily};
  font-size: 1.2rem;
  text-align: center;
  text-decoration: none;

  background-color: none;

  margin: 0;
  padding: 20px;
  margin: 10px 0px;

  transition: border-radius 0.4s;

  &:hover {
    cursor: pointer;
    background-color: rgb(${props => props.theme.CeruleanBlue});
    border-radius: 50px;
  }
`;

export const SidebarStyle = styled.div`
  background-color: rgb(${props => props.theme.RichBlack});
  grid-area: sidebar;
`;
