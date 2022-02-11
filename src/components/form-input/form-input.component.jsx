import React from "react";
import {
  InputGroupContainer,
  InputContainer,
  ErrorInfo,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({
  label,
  emailChange,
  passwordChange,
  displayNameChange,
  emailErr,
  passwordErr,
  displayNameErr,
  ...otherProps
}) => {
  let checkChanges = (changeLabel) => {
    if (changeLabel === "email") {
      return emailChange;
    } else if (changeLabel === "displayName") {
      return displayNameChange;
    } else {
      return passwordChange;
    }
  };

  return (
    <InputGroupContainer>
      <InputContainer
        onChange={checkChanges(label)}
        error={label === "email" ? emailErr : passwordErr}
        {...otherProps}
      />
      <FormInputLabel>{label.toUpperCase()}</FormInputLabel>
      {label === "email" ? (
        <ErrorInfo>{emailErr}</ErrorInfo>
      ) : (
        <ErrorInfo>{passwordErr}</ErrorInfo>
      )}
    </InputGroupContainer>
  );
};

export default FormInput;
