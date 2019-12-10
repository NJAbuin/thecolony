import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  border-radius: 5px;
  background-color: rgb(${props => props.theme.CeruleanBlue}, 0.8);
  border: black;
  border-width: thick;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  padding: ${props => (props.children === "Login As Admin" ? `5px` : `10px`)}
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
`;
