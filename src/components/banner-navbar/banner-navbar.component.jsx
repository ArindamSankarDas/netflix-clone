import React from "react";
import { NavLogo, NavBar, AccountLogo } from "./banner-navbar.styles";
import { auth } from "../../firebase/firebase.utils";

import { withRouter } from "react-router-dom";

class BannerNavbar extends React.Component {
  constructor() {
    super();

    this.state = {
      showNavBG: false,
    };
  }

  handleScroll() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        this.setState({ showNavBG: true });
      } else {
        this.setState({ showNavBG: false });
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }

  handleClick = async () => {
    const { history } = this.props;

    await auth.signOut().then(() => history.replace("/"));
  };

  componentDidMount() {
    this.handleScroll();
  }

  render() {
    return (
      <NavBar bgData={this.state.showNavBG}>
        <NavLogo />
        <AccountLogo
          src={`https://i.ibb.co/wRBWcrJ/netflix-profile-icon.jpg`}
          onClick={this.handleClick}
        />
      </NavBar>
    );
  }
}

export default withRouter(BannerNavbar);
