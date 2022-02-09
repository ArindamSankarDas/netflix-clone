import React from "react";
import { NavbarContainer, AppLogo, AuthButton } from "./navbar.styles";

import { withRouter, Link } from "react-router-dom";

const Navbar = ({ history, match, isSignIn }) => {
  return (
    <NavbarContainer>
      <Link to="/">
        <AppLogo />
      </Link>

      {isSignIn ? (
        <AuthButton onClick={() => history.push(`${match.url}sign-in`)}>
          sign in
        </AuthButton>
      ) : null}
    </NavbarContainer>
  );
};

export default withRouter(Navbar);
