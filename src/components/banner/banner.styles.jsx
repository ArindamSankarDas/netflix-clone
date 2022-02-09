import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 60vh;
  background: ${({ imgUrl }) => `url(${imgUrl})`} no-repeat center center;
  background-size: cover;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

export const BannerContents = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  margin-left: 3rem;
  transform: translateY(-50%);

  & > h1 {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 3.5rem;
  }

  & > p {
    display: inline-block;
    width: 60%;
    color: white;
    font-size: 1.6rem;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    & > h1 {
      font-size: 2.5rem;
    }

    & > p {
      font-size: 1.3rem;
    }
  }
`;

export const BannerButtons = styled.div`
  margin: 2rem 0;

  & > button {
    padding: 0.8rem 2.5rem;
    color: white;
    background: rgba(51, 51, 51, 0.5);
    border: none;
    border-radius: 5.5px;
    font-weight: 700;
    cursor: pointer;

    &:first-child {
      margin-right: 1rem;
    }

    &:hover {
      color: #000;
      background-color: #e6e6e6;
      transition: all 0.2s;
    }
  }
`;

export const BannerFadeEffect = styled.div`
  height: 60vh;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );[ftgbv]

  @media (max-width: 768px) {
    height: 50vh;
  }
`;
