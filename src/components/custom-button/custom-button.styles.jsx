import styled from "styled-components";

export const CustomButtonContainer = styled.button`
  position: relative;
  width: 100%;
  height: 8vh;
  background-color: ${({ isGoogle }) => (isGoogle ? "#197862" : "red")};
  color: white;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 1.2rem;
`;
