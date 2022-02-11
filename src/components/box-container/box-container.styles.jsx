import styled from "styled-components";

export const BoxContainerDiv = styled.div`
  width: 35vw;
  height: 80vh;
  background-color: #000000bf;
  border-radius: 0.5rem;
  margin-bottom: 5rem;
  padding: 5rem;

  h1 {
    position: relative;
    margin: 1rem 0 1.5rem 0;
    font-size: 3.5rem;
    color: #fff;
  }

  @media (max-width: 980px) {
    width: 50vw;
  }

  @media (max-width: 740px) {
    width: 100vw;
    height: 90vh;
  }
`;
