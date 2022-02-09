import React from "react";
import { SignInContainer } from "./sign-in.styles";

import Navbar from "../../../components/navbar/navbar.component";
import BoxContainer from "../../../components/box-container/box-container.component";
import FormInput from "../../../components/form-input/form-input.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import RegisteredContainer from "../../../components/registered-container/registered-container.component";

import { signInWithGoogle } from "../../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error1: "",
      error2: "",
    };
  }

  emailVerification = (value) => {
    const symbolAt = value.indexOf("@");
    const dot = value.indexOf(".");

    if (symbolAt < 1 || dot <= symbolAt + 2 || dot === value.length - 1) {
      return this.setState({ error1: "The email entered is invalid" });
    } else {
      return this.setState({ error1: "" });
    }
  };

  emailChange = (event) => {
    let { value, name } = event.target;

    if (value.length === 0) {
      this.setState({ error1: "Email can not be empty." });
    } else {
      this.emailVerification(value);
    }

    return this.setState({ [name]: value });
  };

  passwordChange = (event) => {
    let { value, name } = event.target;

    if (value.length === 0) {
      this.setState({ error2: "Password can not be empty." });
    } else if (value.length < 6) {
      this.setState({
        error2: "Password must contain atleast six characters.",
      });
    } else {
      this.setState({ error2: "" });
    }

    return this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { error1, error2 } = this.state;
    const { checkAuthentication } = this.props;

    if (error1 || error2) {
      alert("Enter the details correctly");
    } else {
      return checkAuthentication(true);
    }
  };

  render() {
    const { email, password, error1, error2 } = this.state;

    return (
      <SignInContainer imageUrl="https://i.ibb.co/5L6pNf9/header-background.jpg">
        <Navbar />
        <BoxContainer>
          <h1>Sing In</h1>
          <form id="form" onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              label="email"
              emailChange={this.emailChange}
              emailErr={error1}
              value={email}
              required
            />
            <FormInput
              type="password"
              name="password"
              label="password"
              passwordChange={this.passwordChange}
              passwordErr={error2}
              value={password}
              required
            />
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} google>
              Sign In/Sign Up with Google
            </CustomButton>
          </form>

          <RegisteredContainer
            linkText="Sign Up Now."
            spanText="New To Netflix?"
            signUp
          />
        </BoxContainer>
      </SignInContainer>
    );
  }
}

export default SignIn;
