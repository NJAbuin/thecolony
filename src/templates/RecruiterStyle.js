import styled from "styled-components";

export const RecruiterStyle = styled.div`
  background-image: linear-gradient(-90deg, rgb(${props => props.theme.CoolGray}), rgb(${props => props.theme.JadeGreen})) ;
  border: 3px solid rgb(${props => props.theme.RichBlack});
  border-radius: 6px;
  justify-self: center;
  height: 8rem;
  width: 95%;
  margin: 2.5%;
  display: block;
  align-content: center;
`;