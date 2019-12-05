import styled from "styled-components";

export const JobPostStyle = styled.div`
  box-sizing: border-box;

  height: minmax(20%, auto);
  width: 95%;
  margin: 2.5%;

  background-color: #ffff00;

  border: 2px solid blue;
  border-radius: 5px;
  transition: border-radius 0.5s border 0.35s;

  &:hover {
    border: 3px solid blue;
    border-radius: 7px;
  }
`;
