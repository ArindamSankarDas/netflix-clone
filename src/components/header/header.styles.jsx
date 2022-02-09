import styled from "styled-components";

export const HeaderContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: ${({ imageUrl }) => `url(${imageUrl})`} no-repeat center;
  background-size: cover;
  border-bottom: 0.8rem solid #222;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.705);
  }
`;
