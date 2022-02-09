import React from "react";
import {
  AuthenticationContainer,
  ModifiedLink,
} from "./registered-container.styles";

const RegisteredContainer = ({ signUp, linkText, spanText }) => {
  return (
    <AuthenticationContainer>
      <span>{spanText}</span>
      <ModifiedLink to={signUp ? "/sign-up" : "/sign-in"}>
        {linkText}
      </ModifiedLink>
    </AuthenticationContainer>
  );
};

export default RegisteredContainer;
