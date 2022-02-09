import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/Netflix-Logo.wine.svg";

const mediumSize = 13.5;
const smallSize = 20;
const extraSmallSize = 30;

export const NavbarContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AppLogo = styled(Logo)`
  width: ${`${mediumSize}%`};
  height: ${`${mediumSize}%`};
  margin-left: 5%;

  @media (max-width: 880px) {
    width: ${`${smallSize}%`};
    height: ${`${smallSize}%`};
  }

  @media (max-width: 585px) {
    width: ${`${extraSmallSize}%`};
    height: ${`${extraSmallSize}%`};
  }
`;

export const AuthButton = styled.button`
  width: 20%;
  display: inline-block;
  margin-right: 5%;
  padding: 0.8rem 1rem;
  background-color: #e50914;
  color: #fff;
  cursor: pointer;
  border: none;
  line-height: normal;
  text-transform: capitalize;
  font-size: 2rem;
  font-weight: 400;
  border-radius: 0.5rem;

  @media (max-width: 693px) {
    width: 30%;
    font-size: 1.5rem;
  }
  @media (max-width: 573px) {
    width: 50%;
  }
  @media (max-width: 450px) {
    width: 80%;
  }

  @media (max-width: 400px) {
    width: 100%;
    font-size: 1rem;
  }
`;
