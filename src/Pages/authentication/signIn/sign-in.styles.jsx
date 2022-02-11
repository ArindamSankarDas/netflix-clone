import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  background: ${({ imageUrl }) => `url(${imageUrl})`} no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
  }

  @media (max-width: 740px) {
    background: #000;
  }
`;
