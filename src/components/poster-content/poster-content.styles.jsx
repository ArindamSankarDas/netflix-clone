import styled from "styled-components";

const zoomValue = 1.08;

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const PosterDiv = styled.div`
  position: relative;
  min-width: ${({ ImgSize }) => (ImgSize ? "25rem" : "35rem")};
  height: ${({ ImgSize }) => (ImgSize ? "35rem" : "20rem")};
  margin: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    cursor: pointer;
    transform: ${({ ImgSize }) =>
      ImgSize ? `scale(${zoomValue + 0.01})` : `scale(${zoomValue})`};
    transition: transform 0.2s ease-in;
  }
`;
