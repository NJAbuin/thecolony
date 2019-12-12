import styled from "styled-components";

export const JobPostStyle = styled.div`
  box-sizing: border-box;

  height: minmax(20%, auto);
  width: 95%;
  margin: 2.5%;

  background-color: rgb(
    ${props => (props.backgroundColor ? "255,0,0" : props.theme.JadeGreen)}
  );

  //props.selectedId? selectedColor : props.theme.JadeGgreen

  border: 2px solid rgb(${props => props.theme.CeruleanBlue}, 0.6);
  border-radius: 6px;
  transition: border-radius 0.5s border 0.8s;

  &:hover {
    border: 3px solid rgb(${props => props.theme.CeruleanBlue});
    border-radius: 7px;
  }
`;
