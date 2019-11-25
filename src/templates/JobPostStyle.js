import styled from "styled-components";

export const JobPostStyle = styled.div`
  display: flex;
  box-sizing: border-box;

  height: 20%;
  width: 95%;
  margin: 2.5%;
  

  background-color: #ffff00;

  border: 3px solid blue;
  border-radius: 5px;
  transition: border-radius 0.5s border 0.35s;

  &:hover {
    border: 4px solid blue;
    border-radius: 7px;
  }
`;
