import styled from "styled-components";

export const ModalDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 100;
  transform: translateX(-50%);
  width: 100vw;
  height: 70vh;
  background: ${({ BackdropPath }) => `url(${BackdropPath})`} no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 510px) {
    background: ${({ PosterPath }) => `url(${PosterPath})`} no-repeat;
    background-size: cover;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  z-index: 100;
  top: 8%;
  right: 8%;
  width: 5rem;
  height: 3rem;
  background: ${({ imageUrl }) => `url(${imageUrl})`} no-repeat;
  background-size: contain;
  cursor: pointer;

  @media (max-width: 400px) {
    right: 5%;
    width: 3rem;
    height: 2.5rem;
  }
`;

export const ModalContent = styled.div`
  margin: 2rem 4rem;
  color: white;

  h1 {
    margin-bottom: 2rem;
    font-size: 4rem;
    font-weight: 500;
  }

  p {
    font-size: 1.8rem;
    width: 70%;
  }

  @media (max-width: 880px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 2.8rem;
    }

    p {
      width: 80%;
      font-size: 1.8rem;
    }
  }
`;

export const ModalButtons = styled.div`
  margin: 2rem 4rem;

  & > button {
    padding: 1.5rem 2.5rem;
    color: white;
    border: none;
    border-radius: 5.5px;
    font-weight: 700;
    cursor: pointer;

    &:first-child {
      margin-right: 1.4rem;
      background-color: #f80616de;
    }

    &:last-child {
      background-color: transparent;
      border: 1px solid white;
    }

    &:hover {
      transform: scale(1.2);
      transition: all 0.2s;
    }
  }
`;

export const ModalShadeEffect = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    268deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
