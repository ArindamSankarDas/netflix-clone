import styled from "styled-components";
import { Link } from "react-router-dom";

export const ModifiedLink = styled(Link)`
  color: white;
`;

export const AuthenticationContainer = styled.div`
  position: relative;
  display: flex;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 8%;

  span {
    color: #737373;
    padding-right: 2rem;
  }
`;
