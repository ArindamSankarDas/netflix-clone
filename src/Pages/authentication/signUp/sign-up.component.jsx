import React from "react";
import { SignUpContainer } from "./sign-up.styles";

import { auth } from "../../../firebase/firebase.utils";
import { createUserProfileDocument } from "../../../firebase/firebase.utils";

import Navbar from "../../../components/navbar/navbar.component";
import FormInput from "../../../components/form-input/form-input.component";
import BoxContainer from "../../../components/box-container/box-container.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import RegisteredContainer from "../../../components/registered-container/registered-container.component";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
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

  displayName = (event) => {
    let { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { error1, error2, email, password, displayName } = this.state;

    if (error1 || error2) {
      alert("Enter the details correctly");
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        await createUserProfileDocument(user, { displayName });

        this.setState({
          displayName: "",
          email: "",
          password: "",
          error1: "",
          error2: "",
        });
      } catch (error) {}
    }
  };

  render() {
    const { displayName, email, password, error1, error2 } = this.state;
    return (
      <SignUpContainer imageUrl="https://i.ibb.co/5L6pNf9/header-background.jpg">
        <Navbar />
        <BoxContainer>
          <h1>Sign Up</h1>

          <form id="form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              label="displayName"
              displayNameChange={this.displayName}
              value={displayName}
              autoComplete="off"
              required
            />
            <FormInput
              type="email"
              name="email"
              label="email"
              emailChange={this.emailChange}
              emailErr={error1}
              value={email}
              autoComplete="off"
              required
            />
            <FormInput
              type="password"
              name="password"
              label="password"
              passwordChange={this.passwordChange}
              passwordErr={error2}
              value={password}
              autoComplete="off"
              required
            />
            <CustomButton type="submit">Sign Up</CustomButton>
          </form>
          <RegisteredContainer
            linkText="Sign In Now."
            spanText="Already Signed In?"
          />
        </BoxContainer>
      </SignUpContainer>
    );
  }
}

export default SignUp;
