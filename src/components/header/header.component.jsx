import React from "react";
import { HeaderContainer } from "./header.styles";

import Navbar from "../navbar/navbar.component";
import HeaderDetail from "../header-detail/header-detail.component";
import EmailContainer from "../email-container/email-container.component";

const Header = () => {
  return (
    <HeaderContainer imageUrl="https://i.ibb.co/5L6pNf9/header-background.jpg">
      <Navbar isSignIn />
      <HeaderDetail />
      <EmailContainer />
    </HeaderContainer>
  );
};

export default Header;
