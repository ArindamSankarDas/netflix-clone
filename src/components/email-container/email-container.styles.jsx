import styled, { css } from "styled-components";

const successMessage = css`
  display: none;
`;

const errorMessage = css`
  position: absolute;
  bottom: -2.2rem;
  color: #ffa00a;
  font-size: 1.5rem;

  @media (max-width: 928px) {
    top: 5.5rem;
    left: 0;
  }
`;

export const EmailContainerSection = styled.section`
  width: 100%;
  height: 20%;
  position: relative;
  z-index: 10;
  margin-top: -5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 2rem;
    color: white;
    font-size: 2rem;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-weight: 500;
  }

  @media (max-width: 1000px) {
    h3 {
      padding: 0 1rem;
    }
  }

  @media (max-width: 928px) {
    height: 35%;
  }

  @media (max-width: 680px) {
    h3 {
      font-size: 1.8rem;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  width: 50%;
  height: 45%;

  input[name="user_email"] {
    width: 100%;
    height: 100%;
    padding-left: 2%;
    padding-top: 1rem;
    border: none;
    outline: none;
    font-size: 1.6rem;
    border-bottom: ${({ inputData }) =>
      inputData ? "none" : "2px solid #ffa00a"};

    &:focus ~ label {
      top: 10%;
      margin-top: 0.5rem;
      margin-bottom: 1.3rem;
      font-size: 1.5rem;
      transition: all 0.2s linear;
    }
  }

    @media (max-width: 928px) {
      flex-direction: column;
      align-items: center;

      input[type="user_email"] {
        display: block;
        font-size: 1.5rem;

        &:focus ~ label {
          top: 5%;
          font-size: 1.1rem;
        }
      }
    }

    @media (max-width: 680px) {
      width: 80%;
    }
  }
`;

export const LabelContainer = styled.label`
  position: absolute;
  top: 50%;
  left: 2%;
  color: #8c8c8c;
  font-size: 1.6rem;
  transform: translateY(-50%);

  @media (max-width: 928px) {
    top: 25%;
    transform: translateY(-50%);
  }
`;

export const Button = styled.button`
  width: 50%;
  border: none;
  background-color: #e50914;
  color: white;
  font-size: 2.6rem;
  cursor: pointer;

  &:active {
    background-color: #380608;
  }

  @media (max-width: 1000px) {
    font-size: 2rem;
  }

  @media (max-width: 928px) {
    position: relative;
    top: 3rem;
    width: 40%;
    height: 100%;
  }

  @media (max-width: 680px) {
    top: 4rem;
    width: 50%;
    font-size: 1.8rem;
  }
`;

export const Message = styled.span`
  ${({ message }) => (message ? successMessage : errorMessage)}
`;
