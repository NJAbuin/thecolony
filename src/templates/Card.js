import styled from "styled-components";

export const Card = styled.div`
  background-color: ${props => props.color};
  justify-self: center;
  align-self: center;
  height: 90%;
  width: 90%;
  transition: width 0.1s, height 0.1s, transform 0.2s;
  background-image: url(${props => props.imgUrl});
  background-position: center;
  background-size: cover;
  border-radius: 25px;
  background-repeat: no-repeat;

  &:hover {
    height: 95%;
    width: 95%;
    /* transform: rotateY(180deg); */
  }
`;
