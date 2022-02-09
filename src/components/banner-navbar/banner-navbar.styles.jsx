import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/Netflix-Logo.wine.svg";

const NavLogoSize = "10%";
const md_NavLogoSize = "15%";
const sm_NavLogoSize = "18%";
const ex_sm_NavLogoSize = "28%";

const AccountLogoSize = "3%";
const md_AccountLogoSize = "4%";
const sm_AccountLogoSize = "5%";
const ex_sm_AccountLogoSize = "8%";

export const NavBar = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: ${({ bgData }) => (bgData ? "#111" : "transparent")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;

  @media (max-width: 370px) {
    margin-bottom: 2rem;
  }
`;

export const NavLogo = styled(Logo)`
  width: ${NavLogoSize};
  height: 5%;
  margin-left: 1rem;

  @media (max-width: 900px) {
    width: ${md_NavLogoSize};
  }

  @media (max-width: 560px) {
    width: ${sm_NavLogoSize};
  }

  @media (max-width: 400px) {
    width: ${ex_sm_NavLogoSize};
  }
`;

export const AccountLogo = styled.img`
  width: ${AccountLogoSize};
  height: ${AccountLogoSize};
  margin-right: 3rem;
  cursor: pointer;

  @media (max-width: 900px) {
    width: ${md_AccountLogoSize};
    height: ${md_AccountLogoSize};
  }

  @media (max-width: 560px) {
    width: ${sm_AccountLogoSize};
    height: ${sm_AccountLogoSize};
  }

  @media (max-width: 400px) {
    width: ${ex_sm_AccountLogoSize};
    height: ${ex_sm_AccountLogoSize};
  }
`;
