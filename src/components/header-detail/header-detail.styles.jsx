import styled from "styled-components";

export const HeaderDetailContainer = styled.div`
  width: auto;
  height: 50%;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  h2 {
    color: white;
    text-align: center;
    font-family: "Source Sans Pro", sans-serif;
  }

  h1 {
    margin: 0 28%;
    font-size: 5rem;
    letter-spacing: 0.2rem;
  }

  h2 {
    margin-top: 1.4rem;
    font-size: 2.6rem;
    font-weight: 400;
    letter-spacing: 0.12rem;
  }

  @media (max-width: 1030px) {
    h1 {
      margin: 0 25%;
      font-size: 4.2rem;
    }
  }

  @media (max-width: 786px) {
    h1 {
      margin: 0 15%;
      font-size: 3.5rem;
    }

    h2 {
      font-size: 2.2rem;
      padding: 0 2rem;
    }
  }

  @media (max-width: 400px) {
    h1 {
      margin: 0 5%;
      font-size: 2.2rem;
    }

    h2 {
      font-size: 1.6rem;
    }
  }
`;
