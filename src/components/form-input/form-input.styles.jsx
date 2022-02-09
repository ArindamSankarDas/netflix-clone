import styled from "styled-components";

const borderRadius = `0.5rem`;

export const InputGroupContainer = styled.div`
  position: relative;
  width: 100%;
  height: 9.5vh;
  border-radius: ${borderRadius};
  padding: 1.5rem;
  margin-bottom: 2.5rem;
`;

export const ErrorInfo = styled.span`
  position: absolute;
  bottom: -30%;
  left: 0;
  color: #e87c03;
  font-size: 1.3rem;
`;

export const FormInputLabel = styled.label`
  position: absolute;
  font-size: 1.4rem;
  color: #8c8c8c;
  top: 50%;
  transform: translateY(-50%);
`;

export const InputContainer = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  border-radius: ${borderRadius};
  background-color: #333;
  color: white;
  font-size: 1.8rem;
  padding-left: 1.5rem;
  border-bottom: ${({ error }) => (error ? `3px solid #e87c03` : null)};

  &:focus ~ label {
    top: 10%;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    transition: all 0.2s linear;
  }
`;
